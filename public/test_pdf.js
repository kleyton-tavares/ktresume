const http = require('http');
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');

// copy local libs from node_modules into public/js if missing
const ensureLocalLib = (srcPath, destPath) => {
  if (!fs.existsSync(destPath)) {
    try {
      fs.copyFileSync(require.resolve(srcPath), destPath);
      console.log(`copied ${srcPath} to ${destPath}`);
    } catch (e) {
      console.warn(`could not copy ${srcPath}:`, e.message);
    }
  }
};

// copy necessary libraries for offline usage
ensureLocalLib('html2canvas/dist/html2canvas.min.js', path.join(__dirname,'js','html2canvas.min.js'));
ensureLocalLib('jspdf/dist/jspdf.umd.min.js', path.join(__dirname,'js','jspdf.umd.min.js'));
ensureLocalLib('html2pdf.js/dist/html2pdf.bundle.min.js', path.join(__dirname,'js','html2pdf.bundle.min.js'));

// Simple static server for `public` dir
const serve = (port=8000) => {
  const root = path.resolve(__dirname);
  const server = http.createServer((req, res) => {
    let filePath = path.join(root, req.url.split('?')[0]);
    if (req.url === '/') filePath = path.join(root, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  });
  return new Promise(resolve => server.listen(port, () => resolve(server)));
};

(async () => {
  const server = await serve(8000);
  console.log('Server running on http://localhost:8000');
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  page.on('console', async msg => {
    const args = msg.args();
    for (let i = 0; i < args.length; ++i) {
      try {
        const val = await args[i].jsonValue();
        console.log('PAGE LOG:', val);
      } catch {
        console.log('PAGE LOG:', msg.args()[i]);
      }
    }
  });
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

await page.goto('http://localhost:8000', { waitUntil: 'networkidle2' });
  // allow scripts to run
  await new Promise(r => setTimeout(r, 1000));
  // prepare storage variable used by exportPDF
  await page.evaluate(() => {
    window.lastPdfArray = null;
  });

  const languages = ['pt','en','es'];
  for (const lang of languages) {
    console.log('Testing lang', lang);
    // set language
    await page.evaluate(lang => {
      document.querySelector(`.lang-btn[data-lang="${lang}"]`).click();
    }, lang);
    // wait a moment for DOM change
    await new Promise(r => setTimeout(r, 500));
    await page.evaluate(() => { if (window.exportPDF) window.exportPDF(); });
    // wait a bit for PDF generation
    await page.waitForTimeout(3000);
    const data = await page.evaluate(() => window.lastPdfArray);
    console.log(`PDF for ${lang} length:`, data ? data.byteLength : null);
    if (data) {
      fs.writeFileSync(`debug_${lang}.pdf`, Buffer.from(data));
      console.log(`saved debug_${lang}.pdf`);
    }
  }

  await browser.close();
  server.close();
})();
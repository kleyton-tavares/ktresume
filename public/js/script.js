// ==================== CONTEÚDO MULTILÍNGUE ====================
const contentData = {
    pt: {
        // Navegação
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-education': 'Educação',
        'nav-experience': 'Experiência',
        'nav-skills': 'Habilidades',
        'nav-additional': 'Informações',
        
        // Idiomas
        'lang-pt': 'PT',
        'lang-en': 'EN',
        'lang-es': 'ES',
        
        // Hero
        'hero-name': 'Kleyton Fonseca Soares Tavares',
        'hero-title': 'Analista de Sistemas e Consultor SAP',
        
        // Seções
        'section-about': 'Sobre Mim',
        'section-education': 'Educação e Formação',
        'section-experience': 'Experiência Profissional',
        'section-skills': 'Habilidades Técnicas',
        'section-additional': 'Informações Adicionais',
        
        // Sobre
        'about-content': 'Profissional com mais de 12 anos de experiência em arquitetura de sistemas, desenvolvimento full-stack e transformação digital. Especialista em SAP com expertise em ABAP, SAPUI5, SAP BTP e CAP, com foco em soluções escaláveis e inovadoras. Domínio comprovado em desenvolvimento multiplataforma (web, mobile e desktop), análise de dados e implementação de estratégias tecnológicas em ambientes corporativos de grande porte. Combinando excelentes soft skills com habilidades técnicas avançadas, entreguei soluções que impulsionaram a eficiência operacional e agregaram valor significativo aos negócios.',
        
        // Educação
        'edu-backend-title': 'Backend Developer - SAP CAP',
        'edu-backend-inst': 'Plataforma de Aprendizado Online',
        'edu-backend-desc': 'Desenvolvimento avançado de aplicações backend utilizando SAP Cloud Application Programming Model.',
        
        'edu-abap-title': 'SAP ABAP com S/4HANA',
        'edu-abap-inst': 'Plataforma de Aprendizado Online',
        'edu-abap-desc': 'Especialização em ABAP moderno e desenvolvimento para SAP S/4HANA.',
        
        'edu-algo-title': 'Pós-Graduação em Algoritmos e Estruturas de Dados',
        'edu-algo-inst': 'Instituição Educacional',
        'edu-algo-desc': 'Aprofundamento em algoritmos, estruturas de dados e otimização de soluções computacionais.',
        
        'edu-arch-title': 'Pós-Graduação em Arquitetura de Sistemas',
        'edu-arch-inst': 'Focus University',
        'edu-arch-desc': 'Especialização em design de arquiteturas de software escaláveis e robustas.',
        
        'edu-bigdata-title': 'Curso de Big Data',
        'edu-bigdata-inst': 'MIT/UNIJORGE',
        'edu-bigdata-desc': 'Formação em tecnologias de Big Data, análise de grandes volumes de dados e inteligência de negócios.',
        
        'edu-graduated-title': 'Bacharel em Sistemas de Informação',
        'edu-graduated-inst': 'UNIJORGE',
        'edu-graduated-desc': 'Formação completa em sistemas de informação com foco em desenvolvimento e gestão de tecnologia.',
        
        'edu-tech-title': 'Técnico em Informática',
        'edu-tech-inst': 'EEMBA',
        'edu-tech-desc': 'Formação técnica em informática com conhecimentos em redes, sistemas e suporte técnico.',
        
        // Experiência
        'exp-systema-pos': 'Consultor SAPUI5 / Arquiteto de Soluções',
        'exp-systema-comp': 'SYSTEMA',
        'exp-systema-desc': 'Liderança técnica em projetos SAP de grande porte. Desenvolvimento e arquitetura de soluções utilizando SAPUI5, SAP MII, SAP BTP e SAP CAP. Consultoria estratégica para transformação digital e otimização de processos.',
        
        'exp-interface-pos': 'Consultor SAPUI5 / Desenvolvedor Full Stack',
        'exp-interface-comp': 'INTERFACE',
        'exp-interface-desc': 'Desenvolvimento de aplicações web e mobile com SAPUI5. Implementação de soluções MII para integração de sistemas. Desenvolvimento backend em C# e frontend em JavaScript. Gestão de requisitos com stakeholders.',
        
        'exp-techsallus-pos': 'Desenvolvedor Full Stack / Consultor .NET',
        'exp-techsallus-comp': 'TECHSALLUS',
        'exp-techsallus-desc': 'Desenvolvimento de aplicações desktop e web utilizando .NET Framework. Modelagem de bancos de dados e implementação de APIs RESTful. Integração de sistemas e consultoria técnica.',
        
        'exp-controller-pos': 'Desenvolvedor Full Stack',
        'exp-controller-comp': 'CONTROLLER',
        'exp-controller-desc': 'Desenvolvimento end-to-end de aplicações. Criação de interfaces web com foco em usabilidade. Desenvolvimento de soluções desktop com Windows Forms.',
        
        'exp-mf-pos1': 'Desenvolvedor Full Stack',
        'exp-mf-comp': 'MF Planejamento e Informatica',
        'exp-mf-desc1': 'Desenvolvimento de aplicações web e desktop. Implementação de soluções de BI com Analysis Services. Gestão de projetos de pequeno porte.',
        
        'exp-capgemini-pos': 'Desenvolvedor Full Stack',
        'exp-capgemini-comp': 'CAPGEMINI',
        'exp-capgemini-desc': 'Desenvolvimento de aplicações para grandes clientes corporativos. Trabalho em ambientes agile. Implementação de padrões de design e best practices.',
        
        'exp-mf-pos2': 'Desenvolvedor Full Stack',
        'exp-mf-comp2': 'MF Planejamento e Informatica',
        'exp-mf-desc2': 'Início da carreira profissional em desenvolvimento de aplicações desktop. Desenvolvimento de soluções com VB.NET e Windows Forms. Suporte técnico e manutenção de sistemas.',
        
        'exp-present': 'Presente',
        
        // Habilidades
        'skill-sap': 'SAP',
        'skill-languages': 'Linguagens',
        'skill-databases': 'Bancos de Dados',
        'skill-frameworks': 'Frameworks',
        'skill-tools': 'Ferramentas',
        'skill-reports': 'Relatórios',
        'skill-web': 'Web',
        'skill-desktop': 'Desktop',
        'skill-mobile': 'Mobile',
        
        // Informações Adicionais
        'section-additional': 'Informações Adicionais',
        'additional-intro': 'Além das habilidades técnicas, possuo competências interpessoais essenciais para um profissional moderno:',
        
        'soft-organization': 'Organização',
        'soft-adaptability': 'Adaptabilidade',
        'soft-proactivity': 'Proatividade',
        'soft-relationship': 'Facilidade de Relacionamento',
        'soft-determination': 'Determinação',
        'soft-innovation': 'Inovação',
        
        // Rodapé
        'footer-copyright': '© 2026 Kleyton Fonseca Soares Tavares. Todos os direitos reservados.',
        'footer-updated': 'Última atualização: Fevereiro de 2026',
        'footer-linkedin': 'LinkedIn',
        'footer-email': 'Email',
        'footer-phone': 'Telefone',
        'export-pdf': 'Exportar PDF'
    },
    
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-education': 'Education',
        'nav-experience': 'Experience',
        'nav-skills': 'Skills',
        'nav-additional': 'Additional Info',
        
        // Languages
        'lang-pt': 'PT',
        'lang-en': 'EN',
        'lang-es': 'ES',
        
        // Hero
        'hero-name': 'Kleyton Fonseca Soares Tavares',
        'hero-title': 'Systems Analyst and SAP Consultant',
        
        // Sections
        'section-about': 'About Me',
        'section-education': 'Education and Training',
        'section-experience': 'Professional Experience',
        'section-skills': 'Technical Skills',
        'section-additional': 'Additional Information',
        
        // About
        'about-content': 'Professional with over 12 years of experience in systems architecture, full-stack development, and digital transformation. SAP specialist with expertise in ABAP, SAPUI5, SAP BTP, and CAP, focusing on scalable and innovative solutions. Proven proficiency in multiplatform development (web, mobile, and desktop), data analysis, and implementation of technological strategies in large corporate environments. Combining excellent soft skills with advanced technical expertise, I have delivered solutions that drove operational efficiency and added significant business value.',
        
        // Education
        'edu-backend-title': 'Backend Developer - SAP CAP',
        'edu-backend-inst': 'Online Learning Platform',
        'edu-backend-desc': 'Advanced development of backend applications using SAP Cloud Application Programming Model.',
        
        'edu-abap-title': 'SAP ABAP with S/4HANA',
        'edu-abap-inst': 'Online Learning Platform',
        'edu-abap-desc': 'Specialization in modern ABAP and SAP S/4HANA development.',
        
        'edu-algo-title': 'Postgraduate Studies in Algorithms and Data Structures',
        'edu-algo-inst': 'Educational Institution',
        'edu-algo-desc': 'Advanced study of algorithms, data structures, and computational solution optimization.',
        
        'edu-arch-title': 'Postgraduate Studies in Systems Architecture',
        'edu-arch-inst': 'Focus University',
        'edu-arch-desc': 'Specialization in scalable and robust software architecture design.',
        
        'edu-bigdata-title': 'Big Data Course',
        'edu-bigdata-inst': 'MIT/UNIJORGE',
        'edu-bigdata-desc': 'Training in Big Data technologies, large-scale data analysis, and business intelligence.',
        
        'edu-graduated-title': 'Bachelor of Information Systems',
        'edu-graduated-inst': 'UNIJORGE',
        'edu-graduated-desc': 'Complete training in information systems with focus on development and technology management.',
        
        'edu-tech-title': 'Technician in Computer Science',
        'edu-tech-inst': 'EEMBA',
        'edu-tech-desc': 'Technical training in computer science with knowledge of networks, systems, and technical support.',
        
        // Experience
        'exp-systema-pos': 'SAPUI5 Consultant / Solutions Architect',
        'exp-systema-comp': 'SYSTEMA',
        'exp-systema-desc': 'Technical leadership on large-scale SAP projects. Development and architecture of solutions using SAPUI5, SAP MII, SAP BTP, and SAP CAP. Strategic consulting for digital transformation and process optimization.',
        
        'exp-interface-pos': 'SAPUI5 Consultant / Full Stack Developer',
        'exp-interface-comp': 'INTERFACE',
        'exp-interface-desc': 'Development of web and mobile applications with SAPUI5. Implementation of MII solutions for system integration. Backend development in C# and frontend in JavaScript. Stakeholder requirements management.',
        
        'exp-techsallus-pos': 'Full Stack Developer / .NET Consultant',
        'exp-techsallus-comp': 'TECHSALLUS',
        'exp-techsallus-desc': 'Development of desktop and web applications using .NET Framework. Database modeling and RESTful API implementation. System integration and technical consulting.',
        
        'exp-controller-pos': 'Full Stack Developer',
        'exp-controller-comp': 'CONTROLLER',
        'exp-controller-desc': 'End-to-end application development. Web interface creation with focus on usability. Desktop solution development with Windows Forms.',
        
        'exp-mf-pos1': 'Full Stack Developer',
        'exp-mf-comp': 'MF Planning and Computer Science',
        'exp-mf-desc1': 'Development of web and desktop applications. Implementation of BI solutions with Analysis Services. Small-scale project management.',
        
        'exp-capgemini-pos': 'Full Stack Developer',
        'exp-capgemini-comp': 'CAPGEMINI',
        'exp-capgemini-desc': 'Development of applications for large corporate clients. Work in agile environments. Implementation of design patterns and best practices.',
        
        'exp-mf-pos2': 'Full Stack Developer',
        'exp-mf-comp2': 'MF Planning and Computer Science',
        'exp-mf-desc2': 'Beginning of professional career in desktop application development. Development of solutions with VB.NET and Windows Forms. Technical support and system maintenance.',
        
        'exp-present': 'Present',
        
        // Skills
        'skill-sap': 'SAP',
        'skill-languages': 'Languages',
        'skill-databases': 'Databases',
        'skill-frameworks': 'Frameworks',
        'skill-tools': 'Tools',
        'skill-reports': 'Reports',
        'skill-web': 'Web',
        'skill-desktop': 'Desktop',
        'skill-mobile': 'Mobile',
        
        // Additional Info
        'section-additional': 'Additional Information',
        'additional-intro': 'In addition to technical skills, I possess essential interpersonal competencies for a modern professional:',
        
        'soft-organization': 'Organization',
        'soft-adaptability': 'Adaptability',
        'soft-proactivity': 'Proactivity',
        'soft-relationship': 'Relationship-Building',
        'soft-determination': 'Determination',
        'soft-innovation': 'Innovation',
        
        // Footer
        'footer-copyright': '© 2026 Kleyton Fonseca Soares Tavares. All rights reserved.',
        'footer-updated': 'Last updated: February 2026',
        'footer-linkedin': 'LinkedIn',
        'footer-email': 'Email',
        'footer-phone': 'Phone',
        'export-pdf': 'Download PDF'
    },
    
    es: {
        // Navegación
        'nav-home': 'Inicio',
        'nav-about': 'Acerca de',
        'nav-education': 'Educación',
        'nav-experience': 'Experiencia',
        'nav-skills': 'Habilidades',
        'nav-additional': 'Información Adicional',
        
        // Idiomas
        'lang-pt': 'PT',
        'lang-en': 'EN',
        'lang-es': 'ES',
        
        // Hero
        'hero-name': 'Kleyton Fonseca Soares Tavares',
        'hero-title': 'Analista de Sistemas y Consultor SAP',
        
        // Secciones
        'section-about': 'Acerca de Mí',
        'section-education': 'Educación y Formación',
        'section-experience': 'Experiencia Profesional',
        'section-skills': 'Habilidades Técnicas',
        'section-additional': 'Información Adicional',
        
        // Acerca de
        'about-content': 'Profesional con más de 12 años de experiencia en arquitectura de sistemas, desarrollo full-stack y transformación digital. Especialista en SAP con experiencia en ABAP, SAPUI5, SAP BTP y CAP, enfocado en soluciones escalables e innovadoras. Dominio comprobado en desarrollo multiplataforma (web, móvil y escritorio), análisis de datos e implementación de estrategias tecnológicas en grandes ambientes corporativos. Combinando excelentes habilidades blandas con experiencia técnica avanzada, he entregado soluciones que impulsaron la eficiencia operacional y agregaron valor significativo a los negocios.',
        
        // Educación
        'edu-backend-title': 'Desarrollador Backend - SAP CAP',
        'edu-backend-inst': 'Plataforma de Aprendizaje en Línea',
        'edu-backend-desc': 'Desarrollo avanzado de aplicaciones backend utilizando SAP Cloud Application Programming Model.',
        
        'edu-abap-title': 'SAP ABAP con S/4HANA',
        'edu-abap-inst': 'Plataforma de Aprendizaje en Línea',
        'edu-abap-desc': 'Especialización en desarrollo moderno de ABAP y SAP S/4HANA.',
        
        'edu-algo-title': 'Posgrado en Algoritmos y Estructuras de Datos',
        'edu-algo-inst': 'Institución Educativa',
        'edu-algo-desc': 'Estudio avanzado de algoritmos, estructuras de datos y optimización de soluciones computacionales.',
        
        'edu-arch-title': 'Posgrado en Arquitectura de Sistemas',
        'edu-arch-inst': 'Focus University',
        'edu-arch-desc': 'Especialización en diseño de arquitecturas de software escalables y robustas.',
        
        'edu-bigdata-title': 'Curso de Big Data',
        'edu-bigdata-inst': 'MIT/UNIJORGE',
        'edu-bigdata-desc': 'Formación en tecnologías de Big Data, análisis de grandes volúmenes de datos e inteligencia empresarial.',
        
        'edu-graduated-title': 'Licenciatura en Sistemas de Información',
        'edu-graduated-inst': 'UNIJORGE',
        'edu-graduated-desc': 'Formación completa en sistemas de información con enfoque en desarrollo y gestión de tecnología.',
        
        'edu-tech-title': 'Técnico en Informática',
        'edu-tech-inst': 'EEMBA',
        'edu-tech-desc': 'Formación técnica en informática con conocimientos en redes, sistemas y soporte técnico.',
        
        // Experiencia
        'exp-systema-pos': 'Consultor SAPUI5 / Arquitecto de Soluciones',
        'exp-systema-comp': 'SYSTEMA',
        'exp-systema-desc': 'Liderazgo técnico en proyectos SAP de gran escala. Desarrollo y arquitectura de soluciones utilizando SAPUI5, SAP MII, SAP BTP y SAP CAP. Consultoría estratégica para transformación digital y optimización de procesos.',
        
        'exp-interface-pos': 'Consultor SAPUI5 / Desarrollador Full Stack',
        'exp-interface-comp': 'INTERFACE',
        'exp-interface-desc': 'Desarrollo de aplicaciones web y móviles con SAPUI5. Implementación de soluciones MII para integración de sistemas. Desarrollo backend en C# y frontend en JavaScript. Gestión de requisitos con stakeholders.',
        
        'exp-techsallus-pos': 'Desarrollador Full Stack / Consultor .NET',
        'exp-techsallus-comp': 'TECHSALLUS',
        'exp-techsallus-desc': 'Desarrollo de aplicaciones de escritorio y web utilizando .NET Framework. Modelado de bases de datos e implementación de APIs RESTful. Integración de sistemas y consultoría técnica.',
        
        'exp-controller-pos': 'Desarrollador Full Stack',
        'exp-controller-comp': 'CONTROLLER',
        'exp-controller-desc': 'Desarrollo de aplicaciones de extremo a extremo. Creación de interfaces web con enfoque en usabilidad. Desarrollo de soluciones de escritorio con Windows Forms.',
        
        'exp-mf-pos1': 'Desarrollador Full Stack',
        'exp-mf-comp': 'MF Planificación e Informática',
        'exp-mf-desc1': 'Desarrollo de aplicaciones web y de escritorio. Implementación de soluciones de BI con Analysis Services. Gestión de proyectos de pequeña escala.',
        
        'exp-capgemini-pos': 'Desarrollador Full Stack',
        'exp-capgemini-comp': 'CAPGEMINI',
        'exp-capgemini-desc': 'Desarrollo de aplicaciones para grandes clientes corporativos. Trabajo en ambientes ágiles. Implementación de patrones de diseño y mejores prácticas.',
        
        'exp-mf-pos2': 'Desarrollador Full Stack',
        'exp-mf-comp2': 'MF Planificación e Informática',
        'exp-mf-desc2': 'Inicio de carrera profesional en desarrollo de aplicaciones de escritorio. Desarrollo de soluciones con VB.NET y Windows Forms. Soporte técnico y mantenimiento de sistemas.',
        
        'exp-present': 'Presente',
        
        // Habilidades
        'skill-sap': 'SAP',
        'skill-languages': 'Lenguajes',
        'skill-databases': 'Bases de Datos',
        'skill-frameworks': 'Frameworks',
        'skill-tools': 'Herramientas',
        'skill-reports': 'Reportes',
        'skill-web': 'Web',
        'skill-desktop': 'Escritorio',
        'skill-mobile': 'Móvil',
        
        // Información Adicional
        'section-additional': 'Información Adicional',
        'additional-intro': 'Además de las habilidades técnicas, poseo competencias interpersonales esenciales para un profesional moderno:',
        
        'soft-organization': 'Organización',
        'soft-adaptability': 'Adaptabilidad',
        'soft-proactivity': 'Proactividad',
        'soft-relationship': 'Facilidad de Relación',
        'soft-determination': 'Determinación',
        'soft-innovation': 'Innovación',
        
        // Pie de página
        'footer-copyright': '© 2026 Kleyton Fonseca Soares Tavares. Todos los derechos reservados.',
        'footer-updated': 'Última actualización: Febrero de 2026',
        'footer-linkedin': 'LinkedIn',
        'footer-email': 'Correo Electrónico',
        'footer-phone': 'Teléfono'
        ,
        // Export
        'export-pdf': 'Descargar PDF'
    }
};

// ==================== VARIÁVEIS GLOBAIS ====================
let currentLanguage = localStorage.getItem('language') || 'pt';

// ==================== FUNÇÕES DE TRADUÇÃO ====================
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Atualizar texto i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (contentData[lang] && contentData[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'BUTTON' ||
                element.tagName === 'TEXTAREA') {
                element.value = contentData[lang][key];
                element.textContent = contentData[lang][key];
            } else {
                element.textContent = contentData[lang][key];
            }
        }
    });
    
    // Atualizar atributo de linguagem HTML
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en';
    
    // Atualizar botões ativos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

// ==================== EVENT LISTENERS ====================
// Language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        updateLanguage(this.dataset.lang);
    });
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// Inicializar a língua ao carregar
updateLanguage(currentLanguage);

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#home' && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== EXPORTAR PDF ====================
// Ensure html2pdf/html2canvas/jsPDF are available (load dynamically if needed)
async function loadHtml2Pdf() {
    const loaders = [];
    if (!window.html2canvas) {
        loaders.push(new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
            s.async = true;
            s.onload = () => {
                console.log('html2canvas loaded');
                resolve();
            };
            s.onerror = () => {
                console.warn('Could not load remote html2canvas, trying local fallback');
                const local = document.createElement('script');
                local.src = 'js/html2canvas.min.js';
                local.async = true;
                local.onload = () => {
                    console.log('local html2canvas loaded');
                    resolve();
                };
                local.onerror = () => reject(new Error('Failed to load html2canvas (remote+local)'));
                document.body.appendChild(local);
            };
            document.body.appendChild(s);
        }));
    }
    if (!window.jspdf && !window.jsPDF) {
        loaders.push(new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
            s.async = true;
            s.onload = () => {
                // jspdf.umd exposes window.jspdf and/or window.jsPDF
                console.log('jsPDF loaded initial', window.jspdf, window.jsPDF);
                if (window.jspdf && !window.jsPDF) {
                    window.jsPDF = window.jspdf.jsPDF || window.jspdf;
                    console.log('aliased jsPDF to', window.jsPDF);
                }
                resolve();
            };
            s.onerror = () => {
                console.warn('Could not load remote jsPDF, trying local fallback');
                const local = document.createElement('script');
                local.src = 'js/jspdf.umd.min.js';
                local.async = true;
                local.onload = () => {
                    console.log('local jsPDF loaded', window.jspdf, window.jsPDF);
                    if (window.jspdf && !window.jsPDF) {
                        window.jsPDF = window.jspdf.jsPDF || window.jspdf;
                    }
                    resolve();
                };
                local.onerror = () => reject(new Error('Failed to load jsPDF (remote+local)'));
                document.body.appendChild(local);
            };
            document.body.appendChild(s);
        }));
    }
    if (!window.html2pdf) {
        loaders.push(new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js';
            s.async = true;
            s.onload = () => resolve();
            s.onerror = () => {
                console.warn('Could not load remote html2pdf, trying local fallback');
                const local = document.createElement('script');
                local.src = 'js/html2pdf.bundle.min.js';
                local.async = true;
                local.onload = () => resolve();
                local.onerror = () => reject(new Error('Failed to load html2pdf.js (remote+local)'));
                document.body.appendChild(local);
            };
            document.body.appendChild(s);
        }));
    }
    return Promise.all(loaders);
}

async function exportPDF() {
    const element = document.getElementById('cv-content');
    if (!element) {
        alert('Área do currículo não encontrada (id="cv-content").');
        return;
    }

    const langMap = { pt: 'PT', en: 'EN', es: 'ES' };
    const langCode = (currentLanguage && langMap[currentLanguage]) ? langMap[currentLanguage] : 'PT';
    const filename = `CV_Kleyton_Tavares_${langCode}.pdf`;

    console.log('Starting PDF generation', { filename, lang: currentLanguage, html2pdf: !!window.html2pdf });

    // Ensure libraries are loaded (always attempt, since html2pdf may not export jsPDF)
    try {
        await loadHtml2Pdf();
        console.log('libraries load attempt finished', JSON.stringify({
            html2canvas: !!window.html2canvas,
            jsPDF: !!window.jsPDF,
            jspdfObj: !!window.jspdf,
            html2pdf: !!window.html2pdf
        }));
    } catch (err) {
        console.error('loadHtml2Pdf failed', err);
        alert('Não foi possível carregar as bibliotecas de geração de PDF. Verifique sua conexão e tente novamente.');
        return;
    }
    // alias jsPDF if only jspdf object present
    if (!window.jsPDF && window.jspdf) {
        window.jsPDF = window.jspdf.jsPDF || window.jspdf;
        console.log('post-load alias applied, jsPDF now', !!window.jsPDF);
    }

    // Temporarily hide UI elements that should not appear in the PDF
    const hideSelectors = ['header', '.menu-btn', '.nav-menu', '.export-btn'];
    const hiddenEls = [];
    hideSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            el.classList.add('temp-hidden');
            hiddenEls.push(el);
        });
    });

    const restoreUI = () => {
        hiddenEls.forEach(el => el.classList.remove('temp-hidden'));
    };

    // Safety timeout to restore UI if something hangs
    const timeout = setTimeout(() => {
        console.warn('PDF generation timeout — restoring UI');
        restoreUI();
        alert('Tempo esgotado na geração do PDF. Tente novamente.');
    }, 30000);

    try {
        // sanity checks
        if (typeof html2canvas !== 'function') {
            throw new Error('html2canvas não disponível');
        }
        if (typeof jsPDF !== 'function') {
            throw new Error('jsPDF não disponível');
        }

        // use html2canvas + jsPDF to generate instead of html2pdf wrapper
        let canvas = await html2canvas(element, { scale: 2, useCORS: true, letterRendering: true, logging: true });
        if (!canvas) throw new Error('html2canvas retornou null');
        console.log('canvas dimensions', canvas.width, canvas.height);
        if (canvas.width === 0 || canvas.height === 0) {
            console.warn('canvas empty, trying clone fallback');
            const clone = element.cloneNode(true);
            clone.style.visibility = 'visible';
            clone.style.position = 'absolute';
            clone.style.left = '0';
            clone.style.top = '0';
            clone.style.width = element.scrollWidth + 'px';
            clone.style.height = element.scrollHeight + 'px';
            document.body.appendChild(clone);
            canvas = await html2canvas(clone, { scale: 2, useCORS: true, letterRendering: true, logging: true });
            document.body.removeChild(clone);
            console.log('clone canvas dimensions', canvas.width, canvas.height);
            if (canvas.width === 0 || canvas.height === 0) throw new Error('clone canvas also zero');
        }

        const imgData = canvas.toDataURL('image/jpeg', 0.98);
        // jsPDF may be defined under window.jsPDF or window.jspdf.jsPDF after UMD load
        let PdfConstructor = window.jsPDF || (window.jspdf && window.jspdf.jsPDF);
        if (!PdfConstructor && window.html2pdf) {
            // html2pdf bundle might export jsPDF as a property
            try {
                const h = window.html2pdf();
                if (h && h.jsPDF) PdfConstructor = h.jsPDF;
            } catch (_) {}
        }
        if (!PdfConstructor) throw new Error('jsPDF constructor not found');
        const pdf = new PdfConstructor('p', 'pt', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgWidth / pdfWidth;
        const imgPdfHeight = imgHeight / ratio;

        let position = 0;
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgPdfHeight);
        position -= pdfHeight;
        while (Math.abs(position) < imgPdfHeight) {
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgPdfHeight);
            position -= pdfHeight;
        }
        // store arraybuffer for debugging/tests
        try {
            window.lastPdfArray = pdf.output('arraybuffer');
        } catch (e) {
            console.warn('could not capture pdf output:', e);
        }
        pdf.save(filename);
        finished = true;
    } catch (err) {
        const msg = err && err.message ? err.message : String(err);
        console.error('Error generating PDF:', msg, err.stack || '');
        alert('Erro ao gerar PDF: ' + msg);
    } finally {
        clearTimeout(timeout);
        restoreUI();
    }
}

// Hook export button
const exportBtn = document.getElementById('exportBtn');
if (exportBtn) {
    exportBtn.addEventListener('click', exportPDF);
}

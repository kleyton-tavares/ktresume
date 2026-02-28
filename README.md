# Kleyton Tavares - Currículo Interativo

Um site moderno, profissional e totalmente responsivo de currículo para Kleyton Fonseca Soares Tavares.

## 📁 Estrutura do Projeto

```
ktresume/
├── index.html                          # Arquivo principal HTML
├── css/
│   └── styles.css                      # Estilos globais
├── js/
│   └── script.js                       # Lógica JavaScript (i18n, navegação)
├── assets/
│   ├── images/
│   │   └── profile.jpg                 # Foto de perfil (coloque sua foto aqui)
│   └── icons/                          # (Opcional) Ícones customizados
├── docs/
│   └── CV-KLEYTON FONSECA...pdf        # Documento PDF original do CV
├── README.md                           # Este arquivo
└── .gitignore                          # (Opcional) Arquivo de configuração do Git
```

## 🚀 Começando

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de texto (VS Code, sugerido)

### Instalação

1. **Clone ou baixe o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/ktresume.git
   cd ktresume
   ```

2. **Adicione sua foto de perfil:**
   - Coloque uma imagem JPG ou PNG em `assets/images/profile.jpg`
   - Dimensão recomendada: 300x300px (quadrada)
   - Se nenhuma imagem for encontrada, um ícone padrão será exibido

3. **Abra o arquivo index.html:**
   - Abra em seu navegador: `file:///caminho/do/projeto/index.html`
   - Ou use um servidor local (recomendado):
     ```bash
     python -m http.server 8000
     # ou use: npx http-server
     ```

## 🌐 Funcionalidades

### ✨ Seletor de Idiomas
- **Português (PT-BR)**: Padrão
- **Inglês (EN)**: Versão completa em inglês
- **Espanhol (ES)**: Versão completa em espanhol
- Alternância sem recarregar a página
- Preferência salva no navegador (localStorage)

### 📱 Responsividade
- ✅ Mobile (≤480px)
- ✅ Tablet (480px - 768px)
- ✅ Desktop (≥769px)
- Navegação fluida com menu mobile

### 🎨 Características de Design
- **Paleta de cores**: Azul profissional (#0066cc) com teal secundário (#00b4d8)
- **Tipografia**: Poppins (Google Fonts)
- **Ícones**: Font Awesome 6.4.0
- **Efeitos**: Hover animations, smooth scroll, transições suaves
- **Sombras**: Suaves para profundidade visual
- **Cantos arredondados**: Para um visual moderno

### 📑 Seções Incluídas
1. **Cabeçalho Fixo**: Logo, navegação e seletor de idiomas
2. **Hero**: Apresentação com avatar/foto, nome e contato
3. **Sobre Mim**: Resumo profissional atraente
4. **Educação**: 7 cursos/formações (2010-2025)
5. **Experiência**: Timeline com 7 empresas/posições (2010-presente)
6. **Habilidades**: 9 categorias de skills em badges
   - SAP (6 skills)
   - Linguagens (8 skills - incluindo Kotlin)
   - Bancos de Dados (5 skills)
   - Frameworks (4 skills)
   - Ferramentas (4 skills)
   - Relatórios (3 skills)
   - Web (4 skills)
   - Desktop (2 skills)
   - Mobile (3 skills)
7. **Informações Adicionais**: 6 soft skills
8. **Rodapé**: Copyright e links de contato

## 📝 Personalização

### Modificar Foto de Perfil
1. Substitua o arquivo em `assets/images/profile.jpg`
2. Ou altere o caminho em `index.html`:
   ```html
   <img src="seu-novo-caminho/profile.jpg" alt="Seu Nome">
   ```

### Adicionar/Editar Conteúdo
- **Experiência/Educação**: Edite os `<div class="experience-item">` e `<div class="education-item">` no `index.html`
- **Habilidades**: Modifique as `<span class="skill-badge">` nas respectivas categorias

### Traduzir Conteúdo
- Abra `js/script.js`
- Localize o objeto `contentData`
- Adicione suas traduções seguindo a estrutura:
  ```javascript
  pt: { 'chave': 'valor' }
  en: { 'chave': 'value' }
  es: { 'chave': 'valor' }
  ```

### Mudar Cores
Edite as variáveis CSS em `css/styles.css`:
```css
:root {
    --primary-color: #0066cc;      /* Azul principal */
    --secondary-color: #00b4d8;    /* Teal secundário */
    --text-dark: #1a1a1a;          /* Texto escuro */
    --bg-light: #f8f9fa;           /* Fundo claro */
}
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Grid, Flexbox, Variáveis, Media Queries
- **JavaScript (Vanilla)**: Sem dependências externas
- **Google Fonts**: Tipografia Poppins
- **Font Awesome**: Ícones

## 📊 SEO & Meta Tags

O site inclui:
- ✅ Meta tags de descrição
- ✅ Meta tags de palavras-chave
- ✅ Meta viewport para responsividade
- ✅ Estrutura HTML semântica
- ✅ Atributos `alt` em imagens

## 🌍 Deploy

### Opção 1: GitHub Pages (Recomendado)
1. Crie um repositório no GitHub
2. Faça push dos arquivos
3. Ative GitHub Pages nas configurações
4. Seu site estará em: `https://seu-usuario.github.io/ktresume`

### Opção 2: Vercel
```bash
npm install -g vercel
vercel
```

### Opção 3: Netlify
- Faça upload direto em [Netlify Drop](https://netlify.app)
- Ou conecte seu repositório Git

### Opção 4: Servidor Web Tradicional
- Hospede em qualquer servidor web (Apache, Nginx, etc.)
- Copie todos os arquivos para o diretório public_html

## 📞 Contato

- **Telefone**: +55 71 99134-2695
- **Email**: contato@kleytontavares.com.br
- **LinkedIn**: [linkedin.com/in/kleyton](https://linkedin.com/in/kleyton)

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para adaptá-lo conforme necessário.

## 🎯 Próximas Melhorias

- [ ] Integração com blog
- [ ] Portfólio de projetos
- [ ] Formulário de contato
- [ ] Dark mode
- [ ] Certificados
- [ ] Recomendações/Testimoniais

## 📧 Suporte

Para dúvidas ou sugestões, entre em contato através do email ou LinkedIn.

---

**Última atualização**: Fevereiro de 2026

Desenvolvido com ❤️ por Kleyton Fonseca Soares Tavares

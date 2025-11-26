## ⚙️ Configuração

O arquivo `astro.config.ts` define a URL base para publicação no GitHub Pages. As variáveis `REPO_NAME` e `GITHUB_USER` devem ser ajustadas conforme o repositório de destino. O sistema utiliza integração com Svelte e Tailwind CSS sem aplicação de estilos base do framework.

## 🚀 Comandos

**Instalação de dependências:**

```bash
npm install
```

**Execução em ambiente de desenvolvimento:**

```bash
npm run dev
```

**Construção para produção:**

```bash
npm run build
```

**Visualização da build de produção:**

```bash
npm run preview
```

## 📦 Implantação

O workflow de GitHub Actions configurado em `.github/workflows/deploy.yml` realiza a construção e publicação automática. O processo ocorre em duas etapas: construção dos arquivos estáticos com upload para o GitHub Pages, seguido da implantação efetiva no ambiente de produção. É necessário configurar as permissões adequadas no repositório para permitir escrita em páginas e tokens de identificação.

## 🎨 Personalização

Para adaptar o portfólio, edite os arquivos em `src/pages/` com as informações desejadas. As imagens devem ser colocadas em `src/assets/` e importadas nos componentes. O esquema de cores e os estilos podem ser ajustados através do Tailwind CSS no arquivo de configuração ou diretamente nas classes dos componentes.
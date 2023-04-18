# Ignite Call

## #1 - Setup & estrutura

### #1.2 - Criação do projeto em Next

* `npx create-next-app@latest --use-npm`

### #1.3 - Instalação do Design System

* `npm i @kierico-ui/react@latest`

* `npm run dev`

### #1.4 - Configuração do ESLint

* `npm i @rocketseat/eslint-config -D`

```json
/** .eslintrc.json */
{
  "extends": [
    "next/core-web-vitals",
    "@rocketseat/eslint-config/react"    // <--
  ]
}
```

* `npm run lint`

* `npm run lint -- --fix`

### #1.5 - Configuração do pageExtensions

```js
/** next.config.js */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
}

module.exports = nextConfig

```

> Todas as rotas agora precisam terminar com `page.tsx` para poder funcionar. Ex: index.page.tsx

<br /><hr /><br />

## #2 - Cadastro de usuário

### #2.2 - Componente ClaimUsernameForm

* `npm i phosphor-react`


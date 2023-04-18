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


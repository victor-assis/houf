# Hollom Linters

**Hollom Linters** é uma biblioteca interna que padroniza e automatiza as regras de linting para projetos do ecossistema **Hollom Design System**. Ela centraliza configurações de lint para ferramentas como **ESLint**, **Stylelint** e **Prettier**, garantindo consistência de código em toda a organização.

⚠️ **Atenção:** Esta biblioteca é de uso interno e não está disponível para publicação ou uso externo.

---

## 🚀 **Principais Recursos**

- **ESLint**: Regras personalizadas para JavaScript e TypeScript.
- **Stylelint**: Regras de linting para SCSS e CSS.
- **Prettier**: Configurações para formatação automática de código.
- **Integração com Ferramentas Modernas**: Compatível com Nx, React, Angular e outros frameworks usados internamente.
- **Consistência Organizacional**: Centraliza as regras para que todos os projetos sigam os mesmos padrões.

---

## ⚙️ **Configuração**

Após instalar, configure as ferramentas no seu projeto.

### **ESLint**
Adicione o seguinte ao seu arquivo `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['@hollom/linters/eslint'],
};
```

### **Stylelint**
Crie ou edite o arquivo `stylelint.config.js`:

```javascript
module.exports = {
  extends: ['@hollom/linters/stylelint'],
};
```

### **Prettier**
Adicione um arquivo `.prettierrc.js` com a configuração:

```javascript
module.exports = require('@hollom/linters/prettier');
```

---

## 🛠️ **Scripts Recomendados**

Adicione os seguintes scripts ao seu `package.json` para facilitar o uso das ferramentas:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx && stylelint **/*.{css,scss}",
    "format": "prettier --write ."
  }
}
```

---

## 🌟 **Boas Práticas**

- **Automatize com Pre-Commit Hooks**:
  Use o **Husky** para garantir que linting e formatação sejam aplicados antes de commits:

  ```bash
  npm install husky --save-dev
  npx husky install
  ```

  Configure os hooks no arquivo `.husky/pre-commit`:

  ```bash
  #!/bin/sh
  . "$(dirname "$0")/_/husky.sh"

  npm run lint
  npm run format
  ```

- **Integre ao CI/CD**:
  Inclua verificações de linting e formatação nos pipelines de CI/CD para garantir que o código siga os padrões antes de ser mesclado.

---

## 📝 **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE), mas é restrito a uso interno.

---
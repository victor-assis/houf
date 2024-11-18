# Hollom Design System

O **Hollom Design System** é um sistema de design moderno, flexível e escalável, projetado para criar interfaces digitais coesas, consistentes e acessíveis. Este monorepo inclui bibliotecas para estilos, ferramentas e tokens de design que facilitam o desenvolvimento e a manutenção de aplicações web.

---

## 🚀 **Principais Recursos**

- **@hollom/tokens:** Tokens de design reutilizáveis para cores, tipografia, espaçamentos, e outros valores fundamentais.
- **@hollom/styles:** Classes utilitárias e componentes estilizados para criar interfaces rápidas e responsivas.
- **@hollom/tools:** Métodos JavaScript para simplificar a criação e manipulação de componentes e interações web.
- **Acessibilidade (a11y):** Segue as diretrizes do WCAG para interfaces acessíveis.
- **Escalabilidade:** Arquitetura projetada para crescer com seu projeto e suportar temas personalizados.
- **Documentação Completa:** Inclui guias de uso e exemplos práticos para designers e desenvolvedores.

---

## 📦 **Instalação**

Você pode instalar cada biblioteca separadamente de acordo com suas necessidades:

### Instale os Tokens
```bash
npm install @hollom/tokens
```

### Instale os Estilos
```bash
npm install @hollom/styles
```

### Instale as Ferramentas
```bash
npm install @hollom/tools
```

Ou instale todas juntas:
```bash
npm install @hollom/tokens @hollom/styles @hollom/tools
```

---

## 🛠️ **Como Usar**

### **@hollom/tokens**
Use os tokens para garantir consistência visual em suas aplicações:

TO-DO

### **@hollom/styles**
Utilize classes utilitárias e componentes estilizados para acelerar o desenvolvimento:

TO-DO

### **@hollom/tools**
Aproveite métodos JavaScript para criar e gerenciar componentes dinamicamente:

TO-DO

---

## 📚 **Documentação**

Confira a [documentação oficial]() para acessar guias detalhados, exemplos de uso e melhores práticas para integrar o **Hollom Design System** ao seu projeto.

---

## 📝 **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 📓 **Metodologias & Padrões**

### **CSS**
- **BEM (Block, Element, Modifier):** Estrutura de nomenclatura que garante organização.
- **RSCSS:** Abordagem para estruturar estilos de forma simples e escalável.

### **Git**
- **Fast Forward:** Mesclagens que avançam a branch principal sem criar commits extras.
- **Trunk-Based Development:** Fluxo de desenvolvimento centralizado, favorecendo pequenas entregas frequentes na branch principal.


### **Padrão para nomes de branchs e Escopo da msg de commit**

Branches que geram links temporários para teste:

- **feat:** Um novo recurso.
- **fix:** Correção de bug.
- **docs:** Mudança de documentação.
- **release:** Pacote de alterações que podem incluir qualquer tipo de modificação.

Branches que não geram links temporários para teste:

- **chore:** Alteração no processo de construção ou ferramentas auxiliares e bibliotecas, como geração de documentação.
- **ci:** Alteração nas pipelines de integração contínua.
- **style:** Alteração que não afeta o significado do código (espaços em branco, formatação, ponto e vírgula ausentes, etc.).
- **test:** Adição de testes ausentes.

---
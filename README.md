# FLO E-commerce · Vue 3

Este repositório contém um e-commerce simulado de perfumes, desenvolvido como Trabalho de Conclusão de Curso em Engenharia de Software.  
O projeto usa Vue 3 (Vite) no frontend e Cypress com fallback OCR nos testes automatizados.

---

## Pré-requisitos

- **Node.js 18 ou superior**  
  Se não tiver o Node instalado, acesse: [https://nodejs.org/](https://nodejs.org/)

Para verificar se já possui Node.js:

```bash
node -v
```

Deve exibir a versão instalada (ex: `v18.x.x`).

## Clonando o projeto

Clone o repositório para sua máquina:

```bash
git clone https://github.com/beatrizspl/ecommerce-tcc.git
cd ecommerce-tcc
```

## Instalando as Dependências

Execute no terminal dentro da pasta do projeto:

```bash
npm install
```

Isso instala todas as bibliotecas listadas no `package.json`, incluindo:

- Vue 3
- Vite
- Bootstrap (CSS)
- Cypress (E2E)
- Tesseract.js (OCR)

## Rodando a Aplicação

Para iniciar o servidor de desenvolvimento local:

```bash
npm run dev
```

A aplicação estará disponível em: [http://localhost:5173](http://localhost:5173)

## Executando os Testes Automatizados

Este projeto inclui testes E2E com Cypress, simulando cenários reais de UI e fallback visual para elementos dinâmicos.

Para abrir a interface de testes Cypress:

```bash
npx cypress open
```

Os testes podem ser executados via interface ou no terminal.

## Sobre o Projeto

- Simula um e-commerce de perfumes com busca, listagem e carrinho
- Testes cobrem fluxo tradicional e situações onde o botão de compra muda ou desaparece (flaky UI), utilizando fallback OCR (Tesseract.js), uma solução inspirada em problemas reais de automação de testes.
- Código documentado, organizado e pronto para aprendizado ou demonstração técnica.

> Projeto acadêmico (TCC) — Engenharia de Software
> Versão original entregue para avaliação, futura atualização para portfólio.

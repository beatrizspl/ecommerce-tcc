// Teste E2E avançado com fallback OCR
// Caso o seletor padrão falhe, tenta identificar o botão de compra pelo texto usando reconhecimento óptico (OCR).
// Estratégia inspirada em como usuários reconhecem elementos na tela

describe('Teste instável com fallback OCR', () => {
  it('Deve recuperar a execução mesmo com seletor instável', () => {
    const start = performance.now();

    cy.visit('/');
    cy.contains('Shop').click();
    cy.url().should('include', '/shop');

    // usa comando customizado, que tenta o seletor padrão e aciona OCR se falhar
    cy.ocrFallback('COMPRAR').then(() => {
      const end = performance.now();
      cy.log(`🕒 Tempo total do teste: ${(end - start).toFixed(2)} ms`);
    });
  });
});

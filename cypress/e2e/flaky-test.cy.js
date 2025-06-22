// Teste demonstrativo de falha intermitente 
// Simula um cenário real em que um botão de compra pode sumir por instabilidade da UI
// Serve para mostrar porque testes E2E comuns podem falhar sem fallback inteligente

describe('Teste instável (flaky) - Produto com ID instável', () => {
  it('Deve intermitentemente encontrar ou não o botão de compra', () => {
    const start = performance.now();

    cy.visit('/');
    cy.contains('Shop').click();
    cy.url().should('include', '/shop');

    // aguarda a renderização e tenta encontrar o botão pelo seletor padrão
    cy.get('body').then(($body) => {
      const exists = $body.find('[id^=btn-buy-1]').length > 0;
      const end = performance.now();
      const duration = end - start;

      cy.log(`Tempo de execução: ${duration.toFixed(2)} ms`);

      if (exists) {
        cy.log('✅ Botão encontrado - simulação de sucesso.');
        cy.get('[id^=btn-buy-1]').click();
      } else {
        cy.log('❌ Botão NÃO encontrado - simulação de flaky test.');
        // força falha para ilustrar problema real de instabilidade de interface
        expect(exists, 'botão deveria estar visível').to.be.true;
      }
    });
  });
});

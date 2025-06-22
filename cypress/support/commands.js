// Comando customizado Cypress: fallback OCR.
// Se não encontrar o botão pelo seletor padrão, tira um screenshot, extrai o texto via OCR e tenta clicar pelo texto
// Facilita a manutenção de testes E2E em interfaces instáveis

Cypress.Commands.add('ocrFallback', (textToFind) => {
  const screenshotPath = 'cypress/screenshots/fallback-attempt.png';

  return cy.get('body').then(($body) => {
    // procura pelo seletor tradicional do botão.
    if ($body.find('#btn-buy-1').length > 0) {
      cy.get('#btn-buy-1').click();
      return;
    }

    // se não encontrar, faz fallback OCR
    cy.log('⚠️ Botão não encontrado, acionando fallback OCR.');
    cy.screenshot('fallback-attempt');
    cy.wait(500); // garante que o arquivo foi salvo.

    cy.task('extractTextFromImage', {
      imagePath: screenshotPath,
    }).then((ocrText) => {
      cy.log('Texto reconhecido via OCR:', ocrText);

      // tenta clicar no botão pelo texto encontrado.
      if (ocrText.toUpperCase().includes(textToFind.toUpperCase())) {
        cy.contains(textToFind).click({ force: true });
      } else {
        throw new Error(`Texto "${textToFind}" não encontrado via OCR.`);
      }
    });
  });
});

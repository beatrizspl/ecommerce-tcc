// Plugin para integrar OCR (Tesseract.js) com Cypress via "cy.task"
// Permite que os testes extraiam texto de screenshots para encontrar elementos pela interface visual

import tesseract from 'tesseract.js';
import { resolve } from 'path';

export default (on, config) => {
  on('task', {
    // extrai texto de uma imagem usando OCR
    async extractTextFromImage({ imagePath }) {
      const { data: { text } } = await tesseract.recognize(
        resolve(imagePath),
        'por', // idioma português
        { logger: m => console.log(m) }
      );
      return text; 
    }
  });
};

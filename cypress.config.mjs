import { defineConfig } from 'cypress';
import plugin from './cypress/plugins/index.mjs'; 

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      return plugin(on, config);
    }
  }
});

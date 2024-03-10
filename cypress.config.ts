import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 10000,
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
  },
});

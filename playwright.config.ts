import { chromium, defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  use: {
    browserName : 'chromium',
    baseURL : 'https://www.amazon.in/'
  },

});

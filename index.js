const { chromium, firefox, webkit } = require('playwright');

(async () => {
  const browser = await chromium.launch({headless: false});  // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto('http://example.com');
  await page.waitForTimeout(10000);
  // other actions...
  await browser.close();
})();
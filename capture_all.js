import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });

  const routes = [
    { name: 'home', path: '/' },
    { name: 'gmail', path: '/gmail' },
    { name: 'youtube', path: '/youtube' },
    { name: 'facebook', path: '/facebook' },
    { name: 'whatsapp', path: '/whatsapp' },
    { name: 'musicyoutube', path: '/musicyoutube' },
    { name: 'github', path: '/github' },
    { name: 'epson', path: '/epson' },
    { name: 'admin', path: '/admin' }
  ];

  for (const route of routes) {
    console.log(`Capturing ${route.name}...`);
    try {
      await page.goto(`http://localhost:5173${route.path}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2000); // Wait for animations/lazy load
      await page.screenshot({ path: `verify_${route.name}.png` });
    } catch (e) {
      console.error(`Failed to capture ${route.name}: ${e.message}`);
    }
  }

  await browser.close();
})();

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`file:///tmp/harper-university-democracy.html`, {
    waitUntil: 'networkidle0'
  });

  const outputPath = path.join(__dirname, '../public/documents/harper-university-democracy-1899.pdf');
  await page.pdf({
    path: outputPath,
    format: 'Letter',
    margin: {
      top: '0.75in',
      right: '0.75in',
      bottom: '0.75in',
      left: '0.75in'
    },
    printBackground: true
  });

  console.log(`PDF generated: ${outputPath}`);
  await browser.close();
}

generatePDF().catch(console.error);

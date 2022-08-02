const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.bahiana.edu.br/')

    
})
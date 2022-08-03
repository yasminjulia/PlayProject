const { chromium } = require("playwright");

(async()=>{
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://acesso.bahiana')
    //await page.screenshot({path:'print-done.png'})
   

    //LOGIN ACESSO
    await page.fill('.form-control','admin@')
    await page.fill('input[type="password"]','Y' )
    await page.click()
})()

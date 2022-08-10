const { chromium } = require("playwright");

(async()=>{
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://acesso.bahiana.cwww.dev/admin/login')
    //await page.screenshot({path:'print-done.png'})
   
})()
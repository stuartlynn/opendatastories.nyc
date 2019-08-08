import express from 'express'
import puppeteer from 'puppeteer'

const app = express()

app.get('/screenshot', async (req,res)=>{
   const {url} = req.query

   const browser  = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
   const page = await browser.newPage(0)
   await page.goto(url)
   await page.screenshot({path: __dirname + '/test.png'})
   await browser.close();

   res.sendFile(__dirname+'/test.png')
})
app.listen(5000,()=>
   console.log('server on port 5000')
)


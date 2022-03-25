const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar/index.html')
const homeStyles = readFileSync('./navbar/styles.css')
const homeLogo = readFileSync('./navbar/logo.svg')
const homeLogic = readFileSync('./navbar/browser-app.js')

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, { 'content-type':'text/html' })
        res.write(homePage)
        res.end()
    }
    else if(url === '/about'){
        res.writeHead(200, { 'content-type':'text/html' })
        res.write('<h1>About page</h1>')
        res.end()
    }
    
    else if(url === '/styles.css'){
        res.writeHead(200, { 'content-type':'text/css' })
        res.write(homeStyles)
        res.end()
    }
    else if(url === '/logo.svg'){
        res.writeHead(200, { 'content-type':'image/svg+xml' })
        res.write(homeLogo)
        res.end()
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200, { 'content-type':'text/javascript' })
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404, { 'content-type':'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }
})


// const server = http.createServer()

// server.on ('request', (req, res) => {
//     res.end('welcome')
// })

server.listen(5000)
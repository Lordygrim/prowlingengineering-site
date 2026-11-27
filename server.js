// Optional custom server for hosts that need a Node entry file (e.g. cPanel "Setup Node.js App").
// Build first with `npm run build`, then start with `npm run start:server`.
const { createServer } = require('http')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT || '3000', 10)
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})

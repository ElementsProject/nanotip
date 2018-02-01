// Initialize Lightning Charge client
const charge = require('lightning-charge-client')(process.env.CHARGE_URL, process.env.CHARGE_TOKEN)

// Express setup & settings
const app = require('express')()
app.set('port', process.env.PORT || 9115)
app.set('host', process.env.HOST || 'localhost')
app.set('url', process.env.URL || `http://${app.settings.host}:${app.settings.port}`)
app.set('title', process.env.TITLE || 'Lightning Tip Box')
app.set('trust proxy', process.env.PROXIED || 'loopback')

app.use(require('cookie-parser')())
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: true }))

const webhookToken = require('crypto').createHmac('sha256', process.env.CHARGE_TOKEN).update('bakshish-webhook').digest('hex')
    , thankyouUrl  = process.env.THANKYOU_URL || app.settings.url + '/?thankyou'
    , chargePubUrl = (process.env.CHARGE_PUBLIC_URL || process.env.CHARGE_URL).replace(/\/+$/, '')
    , cssPath      = __dirname + '/node_modules/bootswatch/dist/' + (process.env.THEME || 'yeti') + '/bootstrap.min.css'

// Incoming webhook payment notifications
app.post('/webhook/'+webhookToken, (req, res) => {
  console.log('Incoming payment:', req.body)
  res.sendStatus(204)
})

app.use(require('morgan')('dev'))
app.use(require('csurf')({ cookie: true }))

// Frontend
app.get('/', (req, res) => res.render(__dirname + '/bakshish.pug', { req }))
app.get('/bootstrap.min.css', (req, res) => res.sendFile(cssPath))

// Tip request
app.post('/', (req, res, next) =>
  // Create new invoice
  charge.invoice({
    amount: req.body.amount
  , currency: req.body.currency
  , description: app.settings.title
  , expiry: 60000 // 1000 minutes or ~17 hours
  , webhook: app.settings.url + '/webhook/' + webhookToken
  , metadata: { checkout: { redirect_url: thankyouUrl }, info: req.body.info }
  })
  // Redirect to Lightning Charge's checkout page
  .then(inv => res.redirect(302, chargePubUrl + '/checkout/' + inv.id))
  .catch(next)
)

app.listen(app.settings.port, app.settings.host, _ =>
  console.log(`HTTP server running on ${ app.settings.host }:${ app.settings.port }`))

/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

// tells express where we wan to keep the views.
app.set('views', __dirname + '/views')
// tells express we are going to use jade
app.set('view engine', 'jade')

/////////// "use" calls middleware ///////////
// sets the express logger to dev mode
app.use(express.logger('dev'))
// Applies the Stylus middleware
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))

// app.use(require('connect-assets'))
app.use(require("connect-assets")());

// for serving static file that live in the "public" directory
app.use(express.static(__dirname + '/public'))

// create a route
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})
app.listen(process.env.PORT || 3000)
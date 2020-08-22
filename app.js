const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(compression());

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})

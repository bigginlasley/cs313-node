const express = require('express')
const path = require('path')
require('dotenv').config();
const PORT = process.env.PORT || 5000
const app = express();
const connectionString = process.env.DATABASE_URL;
//const pool = new Pool({connectionString: connectionString});

const controller = require('./funct.js');

const app = express();

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('public/index'))
  .get('/postage', handler)//will need to change this
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function getActivites(request, response){
    const aType = request.query.type;
  }

  function handler(request, response){
    const weight = request.query.weight;
    const p_type = request.query.postage_type;
}


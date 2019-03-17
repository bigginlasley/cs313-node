const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();
const connectionString = process.env.DATABASE_URL || "postgres://rsoimcscknisfn:a615490690f6ed303425a81976b9b6e98e73337cbd453a0edbc268de75cdc48c@ec2-75-101-133-29.compute-1.amazonaws.com:5432/d1ih6clrpjaqkd?ssl=true";
const pool = new Pool({connectionString: connectionString});

const controller = require('./funct.js');





express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('public/index'))
  .get('/postage', controller.handler)//will need to change this
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  




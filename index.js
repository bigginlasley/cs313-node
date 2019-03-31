const express = require('express');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});
const activityController = ("./controllers/activityController.js");
const personController = ("./controllers/personController.js");

const controller = require('./funct.js');

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('public/index'))
  .get('/filter', activityController.getActivitesbyType)//will need to change this
  .get('/activities', activityController.getActivities)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))








  
  



 

const express = require('express');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
const bodyParser = require('body-parser');
const connectionString = process.env.DATABASE_URL;
//const pool = new Pool({connectionString: connectionString});
const activityController = require("./controllers/activityController.js");
const personController = require("./controllers/personController.js");


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
  
app.get('/', (req, res) => res.render('public/index'));
app.get('/filter', activityController.getActivitesbyType);//will need to change this


app.get('/activities', activityController.getActivities);
app.get('/person', personController.getPerson);
app.post('/createPerson', personController.createPerson);
app.post('/createActivity', activityController.createActivity);
app.post('/createType', activityController.createActivityType);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));




// app
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('public/index'))
//   .get('/filter', activityController.getActivitesbyType)//will need to change this
//   .get('/activities', activityController.getActivities)
//   .get('/person', personController.getPerson)
//   .post('/createPerson', personController.createPerson)
//   .post('/createActivity', activityController.createActivity)
//   .post('/createType', activityController.createActivityType)
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))








  
  



 

const express = require('express')
const path = require('path')
require('dotenv').config();
const PORT = process.env.PORT || 5000
const app = express();
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});

const controller = require('./funct.js');

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('public/index'))
  .get('/filter', getActivites)//will need to change this
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))








  
  function getActivites(request, response){
    const aType = request.query.type;

    getTypefromDB(type, function(error, result) {

      if (error || result == null) {
        response.status(500).json({success: false, data: error});
      } else {
        const type = result[0];
        response.status(200).json(type);
      }
    });
  }

  function getTypefromDB(type, callback){
    const sql = 'SELECT id FROM activity_type WHERE name= ${type}';
    pool.query(sql, params, function(err, result) {
      if (err) {
        console.log("Error in query: ")
        console.log(err);
        callback(err, null);
      }
      console.log("Found result: " + JSON.stringify(result.rows));

      callback(null, result.rows);

    })

  }

 

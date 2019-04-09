const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
const pool = new Pool({connectionString: db_url});
require('util');

function getActivitiesByType(type, callback) {

    var sql1 = "SELECT activity.name, activity.type, activity.location, activity.capacity, activity.count, activity.time, activity_type.at_name FROM activity, activity_type WHERE activity.type =activity_type.a_id AND activity_type.at_name=$1";

    // var sql1 = "SELECT a_id FROM activity_type WHERE name=$1";
    var params = [type];

    console.log (sql1 + " " + type);

    pool.query(sql1, params, function(err, db_results){
        if(err)
        {
            throw err;
        } else {

            var results = {
                success:true,
                list:db_results.rows
            };
            callback(null, results);


            
        }
    });

}

function getAtivities(callback){

    var sql = "SELECT activity.name, activity.type, activity.location, activity.capacity, activity.count, activity.time, activity_type.at_name FROM activity, activity_type WHERE activity.type =activity_type.a_id";
    pool.query(sql, function(err, db_results){
        if(err)
        {
            throw err;
        } else {


            var results = {
                    success:true,
                    list:db_results.rows
            };
            callback(null, results);
        }
    });


}

function createActivity(activity, callback){
    console.log(activity.type);
    var sql = "INSERT INTO activity (name, type, city, state, location, capacity, count, time) SELECT $1, a_id, $3, $4, $5, $6, $7, $8 FROM activity_type WHERE at_name=$2";
    var params = [activity.name, activity.type, activity.city, activity.state, activity.location, activity.capacity, activity.count, activity.time];
    pool.query(sql, params, function(err,db_results){
        if(err){
            throw err;
        } else {
            var results = {
                success:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    })

}

function createActivityType(type, callback){
    var sql = "INSERT INTO activity_type (at_name) VALUES ($1)";
    var params = [type];
    pool.query(sql, params, function(err, db_results){
        if(err){
            throw err;
        } else {
            var results = {
                success:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    })
}


module.exports = {
    getActivitiesByType: getActivitiesByType,
    getAtivities:getAtivities,
    createActivity: createActivity,
    createActivityType: createActivityType
};
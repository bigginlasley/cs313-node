const activityModel = require("../models/activityModel.js");

function getActivitesbyType(request, response){
    const aType = request.query.type;

    activityModel.getActivitiesByType(aType, function(err, results){
        if(!err)
        {
            response.json(results);
        }
        
    });
    


//     getTypefromDB(type, function(error, result) {

//       if (error || result == null) {
//         response.status(500).json({success: false, data: error});
//       } else {
//         const type = result[0];
//         response.status(200).json(type);
//       }
//     });
//   }

//   function getTypefromDB(type, callback){
//     const sql = 'SELECT id FROM activity_type WHERE name= ${type}';
//     pool.query(sql, params, function(err, result) {
//       if (err) {
//         console.log("Error in query: ")
//         console.log(err);
//         callback(err, null);
//       }
//       console.log("Found result: " + JSON.stringify(result.rows));

//       callback(null, result.rows);

//     })
}

function getActivities(request, response){

    activityModel.getAtivities(function(err, results) {
        if(!err){
        response.json(results);
        }
    });
}

function createActivity(request, response) {
    //grab out info from request and fill in activity

    activity = {"name": " ", "type": " ", "city": " ", "state": " ", "location": " ", "capacity": 0, "count" : 0, "time": " "};
    activityModel.createActivity(activity, function(err, results) {
        if(!err){
            response.json(results);
        }
    })
}

function createActivityType(){

    var name;

    activityModel.createActivityType(name, function(err, results) {
        if(!err){
            response.json(results);
        }
    })

}

module.exports = {
    getActivitesbyType: getActivitesbyType,
    getActivities: getActivities,
    createActivity: createActivity,
    createActivityType: createActivityType
}
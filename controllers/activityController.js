const activityModel = require("../models/activityModel.js");

function getActivitesbyType(request, response){
    const aType = request.query.filter;
    console.log(aType);

    activityModel.getActivitiesByType(aType, function(err, results){
        if(!err)
        {
            response.json(results);
        }
        
    });
    
}

function getActivities(request, response){

    activityModel.getAtivities(function(err, results) {
        if(!err){
        response.json(results);
        }
    });
}

function createActivity(request, response, callback) {
    //grab out info from request and fill in activity

    const act = request.body.activity;
    console.log(act);
    activityModel.createActivity(act, function(err, results) {
        if(!err){
            callback(null, response.json(results));
        }
    })
}

function createActivityType(request, response){

    const type = request.body.c_type;

    activityModel.createActivityType(type, function(err, results) {
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
};
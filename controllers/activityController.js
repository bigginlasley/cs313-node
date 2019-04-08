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
};
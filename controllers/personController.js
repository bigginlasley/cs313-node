const personModel = require("../models/personModel.js");

function getPerson(name){

    personModel.getPerson(name, function(err, results){
        if(!err){
            response.json(results);
        }
    });
}

function createPerson(request, response){

    person = {"fname":" ", "lname":" ", "email": " ", "city": " ", "state": " ", "password": " " };
    personModel.createPerson(person, function(err, results){
        if(!err){
            response.json(results);
        }
    })

}




module.exports = {
    getPerson: getPerson,
    createPerson: createPerson
}
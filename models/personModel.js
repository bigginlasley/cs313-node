const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
const pool = new Pool({connectionString: db_url});


function getPerson(name, callback){

    var results;

    callback(null, results);
}

function createPerson(person, callback){


    var results;
    callback(null, results);
}

module.exports = {
    getPerson: getPerson,
    createPerson: createPerson
};
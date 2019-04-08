function filterResults(){
var filter = $("#atype").val();
console.log("Filter: " + filter);
$.get("/filter", {filter:filter}, function(data) {
    console.log("Back from the server with:");
    console.log(data);
    $("#act_list").empty().append("<tr><th>Name</th><th>Type</th><th>location</th><th>time</th><th>Capacity</th><th>Count</th></tr>")

    for (var i =0; i < data.list.length; i++){
        var act = data.list[i];
        $("#act_list").append("<tr><td>"+ act.name + "</td><td>"+ act.at_name + "</td><td>" + act.location + "</td><td>"+ act.time + "</td><td>" + act.capacity + "</td><td>" + act.count + "</td></tr>");
        console.log(act);
    }

    
})
}


function getAll(){
    $.get("/activities", function(data) {
        console.log("Back from the server with:");
        console.log(data);


        $("#act_list").empty().append("<tr><th>Name</th><th>Type</th><th>location</th><th>time</th><th>Capacity</th><th>Count</th></tr>")

    for (var i =0; i < data.list.length; i++){
        var act = data.list[i];
        $("#act_list").append("<tr><td>"+ act.name + "</td><td>"+ act.at_name + "</td><td>" + act.location + "</td><td>"+ act.time + "</td><td>" + act.capacity + "</td><td>" + act.count + "</td></tr>");
        console.log(act);
    }
    })
}



function addOn(){
    $.post("/createActivity")
}
//         <form action="/filter" method="GET">
// <select id='atype' name='atype'>
// <option value='Lifting'>lifting</option>
// <option value='Basketball'>Basketball</option>
// <option value='Bridge Jumping'>Bridge Jumping</option>
// <option value='Snowmobiling'>Snowmobiling</option>
// </select>

// <button onclick="filterResults()">Results</button>
// </form>
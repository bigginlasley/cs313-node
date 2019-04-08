function filterResults(){
var filter = $("#atype").val();
console.log("Filter: " + filter);
$.get("/filter", {filter:filter}, function(data) {
    console.log("Back from the server with:");
    console.log(data);
})
}


function getAll(){
    $.get("/activities", function(data) {
        console.log("Back from the server with:");
        console.log(data);
    })
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
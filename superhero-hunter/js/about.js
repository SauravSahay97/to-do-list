// Getting Items stored in Local Storage  through their IDs
var resultId = localStorage.getItem('id');

fetch();
// Getting the data
function fetch(){
    var Request = new XMLHttpRequest();
    // By Using Result Id, fetch agian with API 
    var url = `https://gateway.marvel.com/v1/public/characters/${resultId}?apikey=b642275d2178137089dcf1e3a878b2df&hash=c3fc28c7c2b1fe84034b00bf40c325c1&ts=1`;
    Request.open('get',url,true);
    Request.send();
    Request.onload = function(){
        var response = JSON.parse(Request.response);
        // Print the Resoponses
        console.log(response);
        // Changing its inner HTML
            document.getElementById("name").innerHTML = '<b>Name: </b> ' + response.data.results[0].name;
            document.getElementById("id").innerHTML = '<b>Hero ID: </b> ' + response.data.results[0].id ;
            document.getElementById("desc").innerHTML = '<b>Description: </b> ' + response.data.results[0].description ;
            document.getElementById("comic").innerHTML = '<b>Comic Available: </b>'+ response.data.results[0].comics.available ;
            document.getElementById("series").innerHTML = '<b>Series Available: </b>'+ response.data.results[0].series.available ;
            document.getElementById("stories").innerHTML = '<b>Stories Available: </b>'+ response.data.results[0].stories.available ;
            document.getElementById("count").innerHTML = '<b>Count: </b>'+ response.data.count ;
            document.getElementById("modified").innerHTML = '<b>Modified: </b>'+ response.data.results[0].modified;
            document.getElementById("status").innerHTML = '<b>Status: </b>'+ response.status;
            document.getElementById("total").innerHTML = '<b>Total: </b>'+ response.data.total;
            document.getElementById("limit").innerHTML = '<b>Limit: </b>'+ response.data.limit;
            document.getElementById("offset").innerHTML = '<b>Offset: </b>'+ response.data.offset;
            document.getElementById("code").innerHTML = '<b>Code: </b>'+ response.code;

    }

}
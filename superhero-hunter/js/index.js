document.getElementById("search-form").addEventListener('keyup' , function(){
    var url = getUrl();
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open('get',url,true);
    xhrRequest.send();    
    xhrRequest.onload = function(){
        var data = JSON.parse(xhrRequest.responseText);
        display(data);  
    }
});


// Getting URL from API
function getUrl(){
    // Getting value from ID.
    var searchQuery = document.getElementById('search-string').value;
    // Showing what is been searched
    document.getElementById('querySection').innerHTML = 'You have searched for : '+ searchQuery;
//  If search query matches the results then it will execute next function.
    if(!searchQuery){
        return "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b642275d2178137089dcf1e3a878b2df&hash=c3fc28c7c2b1fe84034b00bf40c325c1"
    }else{
        return `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchQuery}&apikey=b642275d2178137089dcf1e3a878b2df&hash=c3fc28c7c2b1fe84034b00bf40c325c1&ts=1`
    }
}

//  Get Canvas 
let canvas = document.getElementById('canvas');
// Get Search String
let searchHero = document.getElementById('search-string').value;


// This Function will display the data
function display(data){
    var superHeroList = document.getElementById('superhero-list');
    superHeroList.innerHTML = "";
    var results = data.data.results;
//  Printing the results from searched Query
    console.log(results);
    if(!results){
        document.getElementById('search-character').value = "";
        window.alert("No super hero found!");
    }else{
       
        // Looping through results of query
        for(let result of results){
            var templateCanvas = canvas.content.cloneNode(true);
            //  Changing the inner HTML
            templateCanvas.getElementById("name").innerHTML = '<b>Name: </b> ' + result.name;
            templateCanvas.getElementById("id").innerHTML = '<b>Hero ID: </b> ' + result.id ;
            templateCanvas.getElementById("comic").innerHTML = '<b>Comic Available: </b>'+ result.comics.available ;
            templateCanvas.getElementById("series").innerHTML = '<b>Series Available: </b>'+ result.series.available ;
            templateCanvas.getElementById("stories").innerHTML = '<b>Stories Available: </b>'+ result.stories.available ;
            //  Setting click Event listener for Learn more button 
            templateCanvas.getElementById('learn-more').addEventListener('click', function(){
                localStorage.setItem('id', result.id);
                window.location.assign('./about.html');
            });
            //  Set Event listener for Fav more button 
            templateCanvas.getElementById('fav').addEventListener('click', function(){
                var index = localStorage.length;
                var data = JSON.stringify(result);
                localStorage.setItem(result.id,data);
            });
            superHeroList.appendChild(templateCanvas);
        }
    }
};
//  This is for displaying alert box message when hero is added to favourites.
function addFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
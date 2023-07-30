const inputbox = document.getElementById("search"); 
const listcontainer = document.getElementById("list-container");
function addtask(){
    if(inputbox.value===''){
        alert("Add task....");
        // alert shown if user adds task without text
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value; 
        // adding input box text to inner li
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "\u00d7"; //to give X symbol
        li.appendChild(span);
    }
    inputbox.value=''; //to clear the text in input box after adding task
    save(); //calling function save() to save on local storage
}

//adding click event listener
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked"); // toggles checked and unchecked
        save(); //calling function save() to save on local storage
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove(); // remove task from list when X clicked
        save(); //calling function save() to save on local storage
    }
},false);

function save(){
    localStorage.setItem("data",listcontainer.innerHTML); //saving data on local storage
}

function show(){
    listcontainer.innerHTML=localStorage.getItem("data"); //retrieving data from local storage
}

show(); //calling function show()

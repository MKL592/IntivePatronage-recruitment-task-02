import {setCounterOfTo} from './movies-counter.js';
import MoviesStorage from './movies-storage.js';

var moviesStorageInstance = new MoviesStorage();
var moviesData = moviesStorageInstance.get();

console.log(moviesData);
//refreshCounters();
showMovieData("moviesList");


function countAllObjectItems(input){
    let amountOfObjectElements = 0;
    for(amountOfObjectElements in input) {
    }
    return amountOfObjectElements;
}

function countObjectValues(input, key, value){
    let filterObject = input.filter(ob => ob[key] === value);
    return countAllObjectItems(filterObject);
}

function refreshCounters(){
    setCounterOfTo(
        "moviesCounterAll", countAllObjectItems(moviesData));
    setCounterOfTo(
        "moviesCounterSeen", countObjectValues(moviesData, "seen", "T"));
}

function createButton(isSeen, loopIteration){
    let newButton = document.createElement("button");
    if(isSeen == "T"){
        newButton.innerHTML = "✔";
    }else if(isSeen == "F"){
        newButton.innerHTML = "✖";
    }else{
        newButton.innerHTML = "{ERROR}";
    }
    (function(index){
        newButton.addEventListener("click", function(){
        if(newButton.innerHTML == "✔"){
            console.log(index);
            newButton.innerHTML = "✖";
            moviesData[index].seen = "F";
            refreshCounters();
        }else if(newButton.innerHTML == "✖"){
            newButton.innerHTML = "✔";
            moviesData[index].seen = "T";
            refreshCounters();
        }else{
            console.log("ERROR");
        }
       })
    })(loopIteration)

    return newButton;
}

function showMovieData(){
    const brTag = document.createElement("br");
    const ulTag = document.createElement("ul");
    let amount = 0;
    for(amount in moviesData){
        let newText = document.createElement("li");
        let seen = moviesData[amount].seen;

        let dataInfo = {
            "currentButton": createButton(seen, amount),
            "currentTitle": document.createTextNode(moviesData[amount].title),
            "currentYear": document.createTextNode(moviesData[amount].year),
            "currentGenre": document.createTextNode(moviesData[amount].genre),
            "currentSummary": document.createTextNode(moviesData[amount].summary)
        }
        var iteration = 0;
        for(iteration in dataInfo){
            newText.appendChild(brTag.cloneNode(true));
            newText.appendChild(dataInfo[iteration]);
        }

        document.getElementById("moviesList").appendChild(newText);
    }
}
//Create logic for:
//1.Cannot add movie without: title, year and genre
//2.Cannot add movie if year is not 4 digit number
//3.Cannot add movie if title is not unique
//4.Clean user input after passing data
//5.If error accures, output reason

function validateInput(){
    let userInput = {
        "title": document.getElementById("title").value,
        "year": document.getElementById("year").value,
        "genre": document.getElementById("genre").value,
        "summary": document.getElementById("summary").value
    }
    console.log(userInput.title);
    if(userInput.title != "" || userInput.year != "" || userInput.genre != ""){
        let currentYear = new Date();
        let getLocalInfo = JSON.parse(localStorage.getItem("movies"));
        let iteration = 0;
        for(iteration in getLocalInfo){
            if(getLocalInfo[iteration].title == userInput.title){
                errorHandler("Title already exists!");
                break;
            }
        }

        if(userInput.year > currentYear.getFullYear() || userInput.year < 999){
            errorHandler("Invalid year!");
        }
        
    }else{
        errorHandler("Please fill the form");
    }
}

function errorHandler(errorMessage){
    alert(errorMessage);
}
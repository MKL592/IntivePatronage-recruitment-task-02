function validateInput(){
    let userInput = {
        "id": createId,
        "title": document.getElementById("title").value,
        "year": document.getElementById("year").value,
        "genre": document.getElementById("genre").value,
        "summary": document.getElementById("summary").value,
        "seen": "F"
    }
    console.log(userInput.title);
    if(userInput.title != "" || userInput.year != "" || userInput.genre != ""){
        let currentYear = new Date();
        let getLocalInfo = JSON.parse(localStorage.getItem("movies"));
        let iteration = 0;

        for(iteration in getLocalInfo){
            if(getLocalInfo[iteration].title == userInput.title){
                errorHandler("Title already exists!");
                return false;
            }else{
                if(userInput.year > currentYear.getFullYear() || userInput.year < 999){
                    errorHandler("Invalid year!");
                    return false;
                }else{
                    return userInput;
                } 
            }
        }
    }else{
        errorHandler("Please fill form");
        return false;
    }
}

function errorHandler(errorMessage){
    alert(errorMessage);
}

function createId(){
    let getLocalInfo = JSON.parse(localStorage.getItem("movies"));
    do{
        let newId = Math.floor(Math.random() * 100);
    }while(newId != getLocalInfo[iteration].id)
    return newId;
}
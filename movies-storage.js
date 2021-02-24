export default class MoviesStorage{
    constructor(){
        if(localStorage.getItem('movies') && localStorage.getItem('movies') === Array){
            //stays empty for now
            //console.log("Item exists in local storage")
        }else{
            //create default list on localstorage with defaultData.json
        }
    }

    get(id){
        if(id !== undefined){
            //get movie with specific id
        }else{
            //get all movies from list
        }
    }

    set(id, data){
        if(data !== undefined){
            //update movie with input id with data
        }else{
            //add new movie to list
        }
    }

    remove(id){
        //remove movie with input id
    }
}

import {movieService} from "../../services";

export default{
    Query:{
        movies: async()=> await movieService.findAll()
    },
    Movie:{
        actors: ({id})=> movieService.batchFindActorsLoader.load(id),
        directors: ({id})=> movieService.batchFindDirectorsLoader.load(id) 
    }
};
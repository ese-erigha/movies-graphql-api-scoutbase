export default{
    Query:{
        movies: async(root,args, {movieService})=> await movieService.findAll()
    },
    Movie:{
        actors: ({id}, args,{movieService})=> movieService.batchFindActorsLoader.load(id),
        directors: ({id}, args,{movieService})=> movieService.batchFindDirectorsLoader.load(id) 
    }
};
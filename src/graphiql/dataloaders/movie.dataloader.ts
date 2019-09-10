import DataLoader from "dataloader";
const models = require("../../database/models");

const findRelationsByMovieIds = async(movieIds: number[], relation: string)=>{
    const moviesWithRelations = await models.Movie.findAll({where: {id: movieIds}, include:[{model: models.Person, as: relation}]});
    return moviesWithRelations.map(movieWithRelations =>{
        return (relation === 'actors') ? movieWithRelations.getActors() : movieWithRelations.getDirectors();
    });
};

const findActorsByMovieId = async(movieIds: number[])=> await findRelationsByMovieIds(movieIds, 'actors');
const findDirectorsByMovieId = async(movieIds: number[])=> await findRelationsByMovieIds(movieIds, 'directors');


export const batchFindActorsLoader = new DataLoader(findActorsByMovieId);
export const batchFindDirectorsLoader = new DataLoader(findDirectorsByMovieId);
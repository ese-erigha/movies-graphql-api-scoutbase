import DataLoader from "dataloader";
const models = require("../../database/models");

const findCountriesByIds = async(ids: number[])=>{
    return await models.Country.findAll({where: {id: ids}}).map(country => country.get({plain: true})); 
};


export const batchFindCountriesLoader = new DataLoader(findCountriesByIds);

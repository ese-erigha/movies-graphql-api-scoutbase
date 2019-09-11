const models = require("../database/models");
import modelFactory from "./model.factory";
import {batchFindCountriesLoader} from "../graphiql/dataloaders/country.dataloader";

export default {
    ...modelFactory(models.Country),
    batchFindCountriesLoader
};
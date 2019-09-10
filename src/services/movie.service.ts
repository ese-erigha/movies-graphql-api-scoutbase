const models = require("../database/models");
import modelFactory from "./model.factory";
import {batchFindActorsLoader,batchFindDirectorsLoader} from "../graphiql/dataloaders/movie.dataloader";

export default {
    ...modelFactory(models.Movie),
    batchFindActorsLoader,
    batchFindDirectorsLoader
};
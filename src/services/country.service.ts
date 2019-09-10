const models = require("../database/models");
import modelFactory from "./model.factory";

export default {
    ...modelFactory(models.Country)
};
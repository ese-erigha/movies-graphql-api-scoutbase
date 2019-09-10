const models = require("../database/models");
import modelFactory from "./model.factory";
import {IUser, IUserQueryIndex, ICreateUserInputType } from "../graphiql/interface";

const findOne = async(query: IUserQueryIndex): Promise<IUser>=>{
    const user = await models.User.findOne({ where: query });
    return (!user) ? user : user.get({plain: true}); 
};

const create = async(entity: ICreateUserInputType): Promise<IUser>=>{
    const user = await models.User.create(entity);
    return user.get({plain: true});  
}

export default {
    ...modelFactory(models.User),
    findOne,
    create
};

import {Request} from "express";
import {sign, verify} from "jsonwebtoken";
import {compare} from "bcrypt";
import { IUser } from "../graphiql/interface";
const {TOKEN_SECRET_KEY,TOKEN_EXPIRATION}  = process.env;

export const getAccessTokenFromRequestHeaders = (request:Request): string | null =>{

    let authorizationHeader = request.get('Authorization');
    let token = null;
    if(authorizationHeader){
       token = authorizationHeader.replace('Bearer ', '');
    }
    return token;
};

export const generateToken =(user: IUser): Promise<string> =>{
    return new Promise((resolve,reject)=>{
        sign(user,TOKEN_SECRET_KEY,{expiresIn: TOKEN_EXPIRATION}, (err,token)=>{
            if(err) reject(err);
            resolve(token);
        });
    });
};


export const getUserFromAuthToken = (token: string): Promise<IUser> =>{
    return new Promise((resolve, reject)=>{
        verify(token,TOKEN_SECRET_KEY,(err,user:IUser)=>{
            if(err) reject(err);
            resolve(user);
        });
    });
};

export const validPassword = async (password, hashedPassword): Promise<Boolean> => {
    try {
        return await compare(password, hashedPassword);
    }
    catch (err) {
        throw(err);
    }
}

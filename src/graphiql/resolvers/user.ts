import { UserInputError, AuthenticationError } from 'apollo-server';
import {validate} from "@hapi/joi";
import { ICreateUserInputType, IAuth, IUser, ILoginInputType } from "../interface";
import { userService } from "../../services";
import { generateToken, validPassword } from "../../utils/auth";
import {createUserSchema, loginSchema} from "../../validation/user.validator";

export default{
    Mutation: {
        createUser: async(root, input: ICreateUserInputType): Promise<IAuth> => {

            const {error} = validate(input, createUserSchema);
            if(!error){
                let user: IUser = await userService.findOne({name: input.name});
                if(!user){
                    user = await userService.create(input);
                    const token = await generateToken(user);
                    return {token,user};
                }
                throw new UserInputError ("User already exist");
            }
            throw new UserInputError(
                'Failed due to validation errors',
                {validationError: error}
            );
            
        },
        login: async(root, input: ILoginInputType): Promise<IAuth> => {

            const {error} = validate(input, loginSchema);
            if(!error){

                let user: IUser = await userService.findOne({email: input.email});

                if(user){
                    const isValidPassword: Boolean = await validPassword(input.password,user.password);
                    if(isValidPassword){
                        const token = await generateToken(user);
                        return {token,user};
                    }
                }
                throw new AuthenticationError("Invalid username or password");
            }
            throw new UserInputError(
                'Failed due to validation errors',
                {validationError: error}
            );
        }
    }
};
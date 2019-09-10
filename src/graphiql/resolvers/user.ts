import { ICreateUserInputType, IAuth, IUser, ILoginInputType } from "../interface";
import { userService } from "../../services";
import { generateToken, validPassword } from "../../utils/auth";

export default{
    Mutation: {
        createUser: async(root, input: ICreateUserInputType): Promise<IAuth> => {
            let user: IUser = await userService.findOne({name: input.name});
            if(!user){
                user = await userService.create(input);
                const token = await generateToken(user);
                return {token,user};
            }
            throw new Error("User already exist");
        },
        login: async(root, input: ILoginInputType): Promise<IAuth> => {

            let user: IUser = await userService.findOne({email: input.email});

            if(user){
                const isValidPassword: Boolean = await validPassword(input.password,user.password);
                if(isValidPassword){
                    const token = await generateToken(user);
                    return {token,user};
                }
            }
            throw new Error("Invalid username or password");
        }
    }
};
import {SchemaDirectiveVisitor} from "apollo-server-express";
import {defaultFieldResolver} from "graphql";
import { IContext } from "../interface";

const randomize = (min: number = 5.0, max: number = 9.0)=>{
     return Math.random() * (max - min) + min;
 };

class AuthenticationDirective extends SchemaDirectiveVisitor{

    visitFieldDefinition(field){
        const {resolve = defaultFieldResolver} = field;
        field.resolve = async function (...args){

            //const [,,context] = args;
            const context: IContext = args[2];
            
            //Resolve field
            let result = resolve.apply(this,args);
        
            if(context && context.user){
                result = randomize();
            }
            return result;
        }
    }
};

export default AuthenticationDirective;
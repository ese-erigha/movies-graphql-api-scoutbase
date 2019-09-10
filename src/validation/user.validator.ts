import {object, string} from "@hapi/joi";

let loginProperties = {
    email: string().email().required(),
    password: string().required().min(6)
};

let createUserProperties = {
    name: string().required(),
    ...loginProperties
}

export const createUserSchema = object(createUserProperties);
export const loginSchema = object(loginProperties);
import gql from "graphql-tag";
import {createTestClient} from "apollo-server-testing";
import {userService, mockedUser, baseUser, authToken} from "../../__utils__/service";
import {createTestServer} from "../../__utils__/server";
import * as auth from "../../src/utils/auth";


describe("Integration Tests for movies query",()=>{

    let responseFromCreatingUserWithValidData = null;
    let responseFromCreatingUserWithInvalidData = null;
    let responseFromLoginWithValidData = null;
    let responseFromLoginWithInvalidData = null;
    let createUserMutation = null;
    let loginMutation = null;
    const expectedUser = {
        id: mockedUser.get().id,
        name: mockedUser.get().name
    };

    beforeAll(async()=>{

        Object.defineProperty(auth,"validPassword",{value: jest.fn(()=>Promise.resolve(true))});
        Object.defineProperty(auth,"generateToken",{value: jest.fn(()=>Promise.resolve(authToken))});

        createUserMutation = gql`
                mutation createUser($name: String!, $email: String!, $password: String!){
                    createUser(name:$name, email: $email, password: $password){
                        token,
                        user{
                            id,
                            name
                        }
                    }
                }
        `;

        loginMutation = gql`
            mutation login($email: String!, $password: String!){
                login(email: $email, password: $password){
                    token,
                    user{
                        id,
                        name
                    }
                }
            }
        `;


        //Create User Server Creation
        const createUserServer = createTestServer({
            user: null,
            userService: {
                create: userService.create,
                findOne: ()=> null
            }
        });

        let graphql = createTestClient(createUserServer);
        responseFromCreatingUserWithValidData = await graphql.mutate({
            mutation: createUserMutation,
            variables: baseUser
        });

        responseFromCreatingUserWithInvalidData = await graphql.mutate({
            mutation: createUserMutation,
            variables: {}
        });


        //Login Mutation Server Creation
        const loginServer = createTestServer({
            user: null,
            userService
        });

        graphql = createTestClient(loginServer);
        responseFromLoginWithValidData = await graphql.mutate({
            mutation: loginMutation,
            variables: {
                email: baseUser.email,
                password: baseUser.password
            }
        });

        responseFromLoginWithInvalidData = await graphql.mutate({
            mutation: loginMutation,
            variables: {
                email: baseUser.email
            }
        });

    });

    test("It should create a new user",async()=>{
        expect(responseFromCreatingUserWithValidData.data.createUser.user).toEqual(expectedUser);
        expect(responseFromCreatingUserWithValidData.data.createUser.token).toEqual(authToken);
    });


    test("It should throw validation error on invalid createUser parameters",async()=>{
        expect(responseFromCreatingUserWithInvalidData.errors.length).toBeGreaterThanOrEqual(1);
    });

    test("It should login user",async()=>{
        expect(responseFromLoginWithValidData.data.login.user).toEqual(expectedUser);
        expect(responseFromLoginWithValidData.data.login.token).toEqual(authToken);
    });

    test("It should throw validation error on invalid login parameters",async()=>{
        expect(responseFromLoginWithInvalidData.errors.length).toBeGreaterThanOrEqual(1);
    });

});
const models = require("../../src/database/models");
import userService from "../../src/services/user.service";
import {IUserQueryIndex, ICreateUserInputType} from "../../src/graphiql/interface";
import {baseUser,mockedUser} from "../../__utils__/service";



describe("Test User Service", () => {

    it("Should fetch one user from database", async()=>{

      models.User.findOne = jest.fn(()=>mockedUser);
      let query: IUserQueryIndex = {name: mockedUser.name};
      const user = await userService.findOne(query);
      expect(mockedUser.name).toEqual(user.name);
    });

    it("Should save user in database", async()=>{
        const userInput: ICreateUserInputType = baseUser;
        models.User.create = jest.fn(()=>mockedUser);
        const user = await userService.create(userInput);
        expect(user.password).toEqual(mockedUser.password);
    });


    it("Should return a list of users from database", async()=>{
        const mockedList = [mockedUser];
        models.User.findAll = jest.fn(()=> mockedList);
        const users = await userService.findAll();
        expect(users.length).toEqual(mockedList.length);
    });

    it("Should find one user by id in database", async()=>{
        models.User.findByPk = jest.fn(()=> mockedUser);
        const user = await userService.findById(mockedUser.id);
        expect(user.id).toEqual(mockedUser.id);
    });

    it("Should call model findByPk method with the right user id", async()=>{
        models.User.findByPk = jest.fn(()=> mockedUser);
        const user = await userService.findById(mockedUser.id);
        expect(models.User.findByPk).toHaveBeenCalledWith(mockedUser.id);
    });
});
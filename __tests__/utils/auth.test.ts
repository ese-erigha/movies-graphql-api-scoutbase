import bcrypt from "bcrypt";
import {validPassword} from "../../src/utils/auth";

jest.mock("bcrypt");
const mockedBcrypt = bcrypt as jest.Mocked<typeof bcrypt>;

describe("Tests on bcrypt methods",()=>{

   let result = null;
   let password = null;
   let hash = null;
   let validPasswordResult = null;

   beforeAll(async ()=>{
      result = true;
      password = "Hello";
      hash = "hghghghghg";
      mockedBcrypt.compare.mockImplementation(()=>Promise.resolve(result));
      validPasswordResult = await validPassword(password,hash);
   });

   test("It should call compare function on bcrypt exactly once",()=>{
      expect(mockedBcrypt.compare).toHaveBeenCalledTimes(1);
   });

   test("It should return true on password comparison",()=>{
      expect(validPasswordResult).toEqual(result);
   });

   test("It should call compare function on bcrypt",()=>{
      expect(mockedBcrypt.compare).toHaveBeenCalled();
   });

   test("It should call compare function on bcrypt with the right arguments",()=>{
      expect(mockedBcrypt.compare).toHaveBeenCalledWith(password,hash);
   });

   afterAll(()=>{
      jest.clearAllMocks();
   });


});
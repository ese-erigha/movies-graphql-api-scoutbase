import bcrypt from "bcrypt";
import {validPassword} from "../src/utils/auth";

jest.mock("bcrypt");
const mockedBcrypt = bcrypt as jest.Mocked<typeof bcrypt>;


describe("Tests on bcrypt methods",()=>{

   let result = null;
   let password = null;
   let hash = null;

   beforeEach(async ()=>{
      result = true;
      password = "Hello";
      hash = "hghghghghg";
      mockedBcrypt.compare.mockImplementation(()=>Promise.resolve(result));
      
   });


   test("It should call compare function on bcrypt exactly once",async ()=>{
      await expect(validPassword(password,hash)).resolves.toEqual(result);
      expect(mockedBcrypt.compare).toHaveBeenCalledTimes(1);
   });


   test("It should return true on password comparison",async ()=>{
      await expect(validPassword(password,hash)).resolves.toEqual(result);
   });


   test("It should call compare function on bcrypt",async ()=>{
      await expect(validPassword(password,hash)).resolves.toEqual(result);
      expect(mockedBcrypt.compare).toHaveBeenCalled();
   });

   test("It should call compare function on bcrypt with the right arguments",async ()=>{
      await expect(validPassword(password,hash)).resolves.toEqual(result);
      expect(mockedBcrypt.compare).toHaveBeenCalledWith(password,hash);
   });

   afterEach(()=>{
      jest.clearAllMocks();
   });


});
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import userModel from "../model/userModel"
import validator from "email-validator";

type userType = {
    fullname: string,
    email: string,
    password: string
}

export async function validateUser(user: userType){
    try{ 
        const {fullname, email, password } = user
    
        if(!validator.validate(email)){
            throw new Error ("Provide a valid email")
        }
        if(!password){
            throw new Error ("The password field is required")
        }
        if(await userModel.findOne({ email})){
            throw new Error ("The email provided is already in use")
        }
        else{
            return true;
        }
    }catch(err: any){
        console.log(err)
    }
}
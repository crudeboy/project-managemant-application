/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import userModel from "../model/userModel";
import { signToken } from "./generateToken";
import bcrypt from "bcryptjs";

type userLoginInfo = { 
    email: string,
    password: string
}

export async function validateUserLogin(user: userLoginInfo){
    try{ 
        const { email, password } = user
        const userData = await userModel.findOne({ email })

        if(!userData){
            throw new Error ("The user does not exist.")
        }

        const validUser = bcrypt.compare(password, userData.password!)
        if(!validUser){
            throw new Error ("Incorrect password")
        }

        return validUser
    }catch(err: any){
        return {
            message: err
        }
    };
    
}


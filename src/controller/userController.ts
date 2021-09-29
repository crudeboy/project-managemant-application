import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import User from "../model/userModel"
import { hashPassword } from "../utils/hashpassword"
import { signToken } from "../utils/generateToken"


type userType = {
    fullname: string,
    email: string,
    password: string
}

type loginType = {
    email: string,
    password: string
}

type userFromDb = {
    _id: string,
    fullname: string,
    email: string,
    password: string
} 

 export async function signup(user: userType){
    let password = user.password
    let hashedPassword = await hashPassword(password)
    user.password = hashedPassword

    return User.create(user)
}


 export async function login(user: loginType){
    const loggedInUser: userFromDb = await User.findOne({ email: user.email })
    try{
        const { _id, email } = loggedInUser

        if(loggedInUser){
            const token = signToken({ _id, email });

            const returnObj = {
                user: user,
                message: `Welcome back, ${loggedInUser.fullname}`,
                token: token
            }

            return returnObj;

        }else{
            return {
                message: "Invalid login details"
            }
        }
    }catch (error) {
        return {
            message: error
        }  
    }
}

////logout
import mongoose from "mongoose";

import Profile from "../model/profileModel"

type profileType = {
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    age: number,
    gender: string,  
    role: string,
    location: string,
    about: string
}


export async function createProfile(profileInfo: profileType){
    const { username } = profileInfo
    let userInDB = await Profile.findOne({ username })
    if(!username){
        let newProfile = Profile.create(profileInfo)
        return {
            message: `${username}, your user profile has successfully been created`,
            profile: newProfile
        }
    }else{
        return {
            message: `the username ${username} has been taken`
        }
    }
}

export async function updateProfile(id: string, profileInfo: profileType){
    return await Profile.findByIdAndUpdate({_id: id}, profileInfo, { new: true})
} 
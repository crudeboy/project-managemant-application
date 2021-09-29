import mongoose from "mongoose";


const profileSchema = new mongoose.Schema({
    firstname : {
        type: String,
        require: [true, "Firstname field is required"]
    },
    lastname : {
        type: String,
        require: [true, "Lastname field is required"]
    },
    username : {
        type: String,
        require: [true, "Username field is required"]
    },
    gender : {
        type: String,
        require: [true, "Gender field is required"]
    },
    role : {
        type: String,
        require: [true, "Role field is required"]
    },
    email : {
        type: String,
        require: [true, "Email field is required"],
        unique: true
    },
    location : {
        type: String,
        require: [true, "Location field is required"]
    },
    about : {
        type: String,
        require: [true, "About field is required"]
    },
}, {timestamps: true})

const Profile = mongoose.model("Profile-data", profileSchema)

export default Profile;
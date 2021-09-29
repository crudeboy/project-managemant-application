import mongoose, { Schema } from "mongoose"
type userFromDb = {
    fullname: string,
    email: string,
    password: string
} 

const userSchema = new mongoose.Schema<userFromDb>({
    fullname: {
        type: String,
        require: [true, "Fullname is required"]
    },
    email: {
        type: String,
        require: [true, "Email field is required"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "Password is required"],
        unique: true,
        minlength: 8,

    },
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;
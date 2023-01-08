import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    fname: String,
    lname: String,
    dob: Date,
    gender: String,
    email: String,
    password: String,
    cnic: {
        type: String,
        unique: true
    },
    address: String,
    phone: String,
    role: {
        type: String,
        default: 'user'
    },

})

const User = new mongoose.model("User", userSchema)

export default User
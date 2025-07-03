import mongoose from 'mongoose'

// Defining of Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        // required: [true, 'Password is required'],   // validation message

    },
}, { timestamps: true })

// Creating model
export const User = mongoose.model('User', userSchema)


// NOTE:
// when 'User' gets stored in mongoDB it, gets into 'users'. MongoDB convents every string in lowercase and plural forms
const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const userSchema = new Schema({
    codename: { 
        type: String, 
        required: true,
        unique: true },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
      },
    password: {
        type: String,
        required: true,
      } 
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("User", userSchema);
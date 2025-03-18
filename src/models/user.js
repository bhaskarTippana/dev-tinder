const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    lastName: {
      type: String,
      minLength: 3,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      }
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate: (value) => {
        if (["male", "female", "others"].includes(value)) {
          return true;
        }
        return false;
      },
    },
    skills:{
      type:[String],
    },
    about:{
      type:String,
      default:"This is about section"
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);



module.exports = User;

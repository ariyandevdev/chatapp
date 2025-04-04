import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,

      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure unique email
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"], // Email validation
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum password length
    },
    profilePic: {
      type: String,
      default: "", // Default profile picture URL
    },
    // bio: {
    //   type: String,
    //   maxlength: 200, // Limit bio to 200 characters
    // },
    // friends: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User", // Referencing another User document for friends
    //   },
    // ],
    // lastLogin: {
    //   type: Date,
    // },
    // isOnline: {
    //   type: Boolean,
    //   default: false,
    // },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;

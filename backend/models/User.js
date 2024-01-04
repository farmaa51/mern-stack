import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const { Schema } = mongoose;
const userScheme = new Schema(
  {
    email: {
      type: "string",
      lowercase: true,
      unique: true,
      required: true,
      validate: [validator.isEmail, "please enter a valid email"],
    },
    username: {
      type: "string",
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: "string",
      required: true,
      validate: [
        {
          validator: (value) => validator.isStrongPassword(value),
          message:
            "password must contain one more alphanumeric character and symbols",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

userScheme.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userScheme.methods.comparePassword = async function (newPassword) {
  await bcrypt.compare(newPassword, this.password);
};

const User = mongoose.model("User", userScheme);
export default User;

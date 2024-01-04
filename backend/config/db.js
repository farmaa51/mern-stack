import mongoose from "mongoose";
import { dbUrl } from "./config.js";
import chalk from "chalk";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log(`Connected to the database: ${chalk.green.bold(dbUrl)}`);
  } catch (e) {
    console.log(`Error connecting to the database: ${chalk.red.bold(dbUrl)}`, e);
    process.exit(1);
  }
};
export default connectDB;

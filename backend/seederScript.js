require('dotenv').config();

const usersData = require("./data/users");
const connectDB = require('./config/db');
const User = require("./model/User");

connectDB();

const importData = async () => {
    try {
        await User.deleteMany({});

        await User.insertMany(usersData);

        console.log("Data import success!")

        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

importData();
import mongoose from "mongoose";

const dbConnection = async (req, res) => {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://127.0.0.1:27017/assignment6').then((result) => {
        console.log("connecting");
    }).catch((error) => {
        console.log("connecting error",error);
    })
}

export default dbConnection

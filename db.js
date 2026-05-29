import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongo = async () => {
    try {
        await connect(process.env.MONGO_URI, {
            dbName: "paymentGateway"
        });

        console.log("MongoDB Connected");

    } catch (error) {
        console.log(error);
    }
}

export default connectToMongo;
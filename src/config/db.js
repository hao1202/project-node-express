import mongoose from "mongoose";

const handleMongoDB = {
    connectDB: async (url) => {
        try {
            mongoose.connect(url);
            console.log("Connect success!");
        } catch (error) {
            console.log(error);
            console.log("Connect fail!");
        }
    }
}

export default handleMongoDB; 
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

let isConnected = false;

 const connectToDatabase = async() => {
    if(isConnected) return;

    try{
        const db = await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } );
        isConnected = !!db.connection[0].readytate;
        console.log("Connected to the Database...");
    }
    catch(error){
        console.log("MongoDb connection Failed: ", error.message)
    }

}

export default connectToDatabase

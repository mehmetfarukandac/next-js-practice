import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectedToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnecteed) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      userNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

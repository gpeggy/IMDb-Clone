import mongoose from "mongoose";
let initialized = false;

export const connect = async () => {
    mongoose.set("strictQuery", false);
  if (initialized) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'imdb-clone',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    initialized = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
}
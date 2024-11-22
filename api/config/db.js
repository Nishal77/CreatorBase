import mongoose from "mongoose";

const connectDB = async (mongoUri) => {
  try {
    console.log("Connecting to MongoDB with URI:", mongoUri); // Debugging log
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined");
    }
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;

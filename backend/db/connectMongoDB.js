import mongoose from "mongoose";

// MongoDB connection URI
const mongoURI = "mongodb://localhost:27017/github-clone";

// Connect to MongoDB
mongoose.connect(mongoURI);

// Check connection status
const connectMongoDB = mongoose.connection;
connectMongoDB.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
);
connectMongoDB.once("open", function () {
    console.log("Connected to MongoDB");
});

export default connectMongoDB;

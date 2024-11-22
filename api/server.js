import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import clerkAuthMiddleware from "./middlewares/authMiddleware.js";

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Directly set the MongoDB URI
const MONGO_URI = "mongodb+srv://rootuser:admin12@cluster0.3n6n4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

connectDB(MONGO_URI);

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

// Example protected route
app.get("/api/protected", clerkAuthMiddleware, (req, res) => {
  res.send("This is a protected route");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
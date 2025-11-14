import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import eventRoutes from "./routes/eventRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import scheduleReminders from "./utils/reminderScheduler.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/events", eventRoutes);

// Error handler
app.use(errorHandler);

// Start reminder scheduler
scheduleReminders();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

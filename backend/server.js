const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const listingRoutes = require("./routes/listingRoutes");  
const uploadRoutes = require("./routes/uploadRoutes");
const app = express();
const allowedOrigins = ["http://localhost:3000"];

dotenv.config();

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Register routes
app.use("/api/users", authRoutes);
app.use("/api", listingRoutes);  // Only one usage here
app.use('/api', uploadRoutes);

connectDB();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Equipment loan API is running...");
});

app.listen(PORT, () => {
  console.log(`Equipment loan API is running on port ${PORT}`);
});
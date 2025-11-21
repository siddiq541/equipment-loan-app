const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const app = express();
const allowedOrigins = [
  "http://localhost:3000",
  "https://equipment-loan-app.vercel.app/",
  "https://equipment-loan-app.vercel.app",
];

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

// Routes

connectDB();

const PORT = process.env.PORT || 5001;

app.use("/api/users", authRoutes);

app.get("/", (req, res) => {
  res.send("Equipment loan API is running...");
});
// Start server
app.listen(PORT, () => {
  console.log(`Equipment loan API is running on port ${PORT}`);
});

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/mongodb");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
dotenv.config();
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API IS RUNNING.,.");
});

app.use("/api", noteRoutes);

app.use("/api", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Api is running on port ${PORT}`);
});

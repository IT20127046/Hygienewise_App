const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

//app middleware
app.use(bodyparser.json());
app.use(cors());

// Routes
const sampleRoutes = require('./routes/sampleRoutes');
app.use(sampleRoutes);

const PostRoutes = require('./routes/postRouter');
app.use(PostRoutes);

//Backend server running post number
const port = process.env.PORT || 5000;

//MongoDB database connection url
const uri = process.env.MONGO_URI;

//Build database connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

// Run backend server
app.listen(port, () => {
  console.log(`Server is started in port ${port}`);
});

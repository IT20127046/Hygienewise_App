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

const userRoutes = require("./routes/userRoutes");
app.use(userRoutes);

const PostRoutes = require('./routes/postRouter');
app.use(PostRoutes);

const sessionRouter = require('./routes/sessionRouter');
app.use(sessionRouter);

const DonationRouter = require('./routes/donationRouter');
app.use(DonationRouter);

const ContactRouter = require('./routes/contactRouter');
app.use(ContactRouter);

const ComplaintRouter = require('./routes/complaintRoutes');
app.use(ComplaintRouter);

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

const express = require('express');
const db = require('./db/connection');
const app = express();
const cors = require('cors');
const crypto = require('crypto');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//importing routes
const { userRoute } = require("./routes/users.route");
// const { subscriptionRoute } = require("./routes/subscriptions.route");

app.use(cors({
    credentials: true,
    origin: [`${process.env.REACT_APP_CLIENT_URL}`, `${process.env.REACT_APP_SERVER_URL}`]
}));

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

// calling API
app.use("/user", userRoute);
// app.use("/subscription", subscriptionRoute);

app.listen(3030, () => {
    console.log('Server start at port no : 3030...');
})

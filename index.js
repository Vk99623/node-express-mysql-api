const express = require("express");

const bodyParser = require("body-parser");

const userRoutes = require("./src/routes/user.route")
//create express app
const app = express();
//setup the server port
const port = process.env.PORT || 5000;


// parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse request data content type application/json
app.use(bodyParser.json());
// app.use(express.json());
app.use("/api/users", userRoutes);
//app.use("/api/auth", authRoute);



//define root route
app.get('/', (req, res) => {
    res.send("hello");
})


app.listen(port || 5000, () => {
    console.log(`Backend server is running! ${port}`);
})
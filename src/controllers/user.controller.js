const userModel = require("../models/user.model")

// get all user list
exports.getUserlist = (req, res) => {
    //console.log("here all users")
    userModel.getAllUsers((err, users) => {
        //console.log("we are here");
        if (err)
            res.send(err);
        //console.log('user', users);
        res.send(users);
    })
}

//get user by id
exports.getUserById = (req, res) => {
    //console.log("get user by Id");
    userModel.getUserById(req.params.id, (err, users) => {
        if (err)
            res.send(err);
        console.log('user by Id', users[0].id);
        res.send(users);
    })
}

//create new user

exports.createNewUser = (req, res) => {
    const userReqData = new userModel(req.body);
    console.log("req data", userReqData)
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: "Please fill all the Details" });
    } else {
        console.log("valid data");
        // return;
        userModel.createUser(userReqData, (err, user) => {
            //console.log(user)
            if (err)
                res.send(err);
            res.json({ status: true, message: 'User created Successfully!', data: user.insertId });
        })
    }
}

//update user
exports.updateUser = (req, res) => {
    const userReqData = new userModel(req.body);
    //console.log("req update data", userReqData)
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: "Please fill all the Details" });
    } else {
        console.log("valid update data");
        //return;
        userModel.updateUser(req.params.id, userReqData, (err, user) => {
            //console.log("=========" + user);
            if (err)
                res.send(err);
            res.json({ status: true, message: 'User updated Successfully!', data: user });
        })
    }
}

//delete user

exports.deleteUser = (req, res) => {

    userModel.deleteUser(req.params.id, (err, users) => {
        console.log(users)
        if (err)
            res.send(err);
        res.json({ success: true, message: 'User delete Successfully!' });

    });
}
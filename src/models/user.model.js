var db = require("../../config/db.config")

var User = function (user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.isAdmin = user.isAdmin ? user.isAdmin : 1;
    this.createdAt = new Date();
    this.updatedAt = new Date();
}

//get all users
User.getAllUsers = (result) => {
    let sql = `select * from users `;
    db.query(sql, (err, res) => {
        if (err) {
            console.log("Error while fetching data!", err);
            result(null, err);
        } else {
            console.log("User fetch successfully...");
            result(null, res)
        }
    })
}

//get user by Id
User.getUserById = (id, result) => {


    let sql = `select * from users where id=?`;
    db.query(sql, id, (err, res) => {

        if (err) {
            console.log("Error while fetching User by Id!", err);
            result(null, err);
        } else {
            console.log("User by Id fetch successfully...");
            result(null, res)
        }
    })
}

//create new user
User.createUser = (userRequsetdata, result) => {
    let sql = `insert into users set ?`;
    db.query(sql, userRequsetdata, (err, res) => {
        if (err) {
            //console.log("Error while Inserting data!");
            result(null, err);
        } else {
            //console.log("User Created successfully...");
            result(null, res)
        }
    })
}

//update user
User.updateUser = (id, userRequsetdata, result) => {
    let sql = `update users set username=?,email=?,password=? where id=?`
    db.query(sql, [userRequsetdata.username, userRequsetdata.email, userRequsetdata.password, id], (err, res) => {
        if (err) {
            console.log("Error while updating data!");
            result(null, err);
        } else {
            console.log("User Updated successfully...");
            result(null, res);
        }
    });
}

//delete user
User.deleteUser = (id, result) => {
    /* let sql = `DELETE FROM users WHERE id=?`;
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log("Error while Deleting data!");
            result(null, err);
        } else {
            console.log("User Delete successfully...");
            result(null, res)
        }
    }); */
    let sql = `update users set isAdmin=? where id=?`
    db.query(sql, [0, id], (err, res) => {
        if (err) {
            console.log("Error while deleting user!");
            result(null, err);
        } else {
            console.log("User deleting successfully...");
            result(null, res);
        }
    });
}

module.exports = User;
const router = require("express").Router();
const db = require("mysql");

router.post("/register", (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const data = {
        username: username,
        email: email,
        password: password,
    };

    console.log(data);

    let sql = "INSERT INTO `users` SET ?";
    db.query(sql, data, (err, result) => {

        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.send(result)
        }
    });
});
/* 
app.post("/register", (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, (errr, hash) => {
        const data = {
            username: req.body.username,
            email: req.body.email,
            password: hash,
        };
        if (errr) {
            console.log(err);
        } else {
            let sqll = `select * from users where email='${email}'`;
            db.query(sqll, (er, ress) => {
                if (ress.length > 0) {
                    res.send({ msg: "User Email Already Present" });
                } else {
                    let sql = "INSERT INTO `users` SET ?";
                    db.query(sql, data, (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            //  console.log(result);
                            res.send(result);
                            // res.send()
                        }
                    });
                }
            });
        }
    });
}); */

module.exports = router;
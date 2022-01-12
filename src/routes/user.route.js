const router = require("express").Router();

const userController = require("../controllers/user.controller");

//get all users
router.get('/', userController.getUserlist)

//get user by Id
router.get('/:id', userController.getUserById)

//create new user
router.post('/', userController.createNewUser)

//update user
router.put('/:id', userController.updateUser)

//delete user
router.delete('/:id', userController.deleteUser)

module.exports = router;
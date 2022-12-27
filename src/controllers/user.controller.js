import users from "../../models/user.model.js";
import validateUser from "../validators/user.validate.js";



const getUsers = async(req, res) => {
    try {
        users.findAll().then(users => {
            res.status(200).json(users);
        });
    } catch (error) {
        console.log(error);
    }
};

const createUser = async(req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    users.create(req.body).then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};














export const methods = {
    getUsers,
    createUser,
};
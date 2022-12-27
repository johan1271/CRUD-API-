import users from "../../models/user.model.js";
import { testConnection } from "../database/database.js";



const getUsers = async(req, res) => {
    try {
        users.findAll().then(users => {
            res.status(200).json(users);
        });
    } catch (error) {
        console.log(error);
    }
};











export const methods = { getUsers };
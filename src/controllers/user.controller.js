//import { User } from "../models/user.model.js";
import { getConnection } from "../database/database.js";
const connection = await getConnection();
const getUsers = async(req, res) => {
    try {

        const users = await connection.query("SELECT * FROM users");



        console.log("ESTOY AQUI", users);
        res.json(JSON.stringify(users));
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something goes wrong" });
    }
};






export const methods = { getUsers };
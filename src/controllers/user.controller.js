//import { User } from "../models/user.model.js";
import { getConnection } from "../database/database.js";

const getUsers = async(req, res) => {
    try {
        const connection = await getConnection();
        const users = await connection.query("SELECT * FROM users");
        console.log("ESTOY AQUI", users);
        res.json(JSON.stringify(users));
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something goes wrong" });
    }
};

const createUser = async(req, res) => {
    try {
        const { iduser, email, password, state, createdAt } = req.body;
        const user = {
            iduser,
            email,
            password,
            state,
            createdAt
        }
        console.log("ESTOY AQUI", iduser, email, password, state, createdAt);
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO users SET ?", user);
        res.json({ message: "User created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something goes wrong" });
    }
};








export const methods = { getUsers, createUser };
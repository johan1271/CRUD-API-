import { DataTypes } from 'sequelize';
import db from '../src/database/database';


const user = {
    iduser: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        autoIncrement: false,
        field: 'iduser',
    },
    username: {
        type: DataTypes.STRING(36),
        unique: true,
        allowNull: false,
        field: 'username',
    },
    password: {
        type: DataTypes.STRING(36),
        allowNull: false,
        field: 'password',
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'state',
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'createdAt',
    },
}

const options = {
    tableName: 'users',
    timestamps: false,
}

const userModel = db.define('user', user, options);

export default userModel;
import config from './../config';
import { Sequelize } from 'sequelize';


const db = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
});



export default db;
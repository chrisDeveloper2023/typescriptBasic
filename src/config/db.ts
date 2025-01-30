import { Sequelize } from "sequelize";

const sequelize = new Sequelize('node_ts_mvc', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;
import { Sequelize } from "sequelize";
import config from 'config'

const dbConfig = config.get("database")

const sequelize = new Sequelize(dbConfig.databaseName, dbConfig.username, dbConfig.password, {
    host: "localhost",
    dialect: dbConfig.dialect,
    storage: dbConfig.storage,
    logging: dbConfig.logging
    
});

export default sequelize;
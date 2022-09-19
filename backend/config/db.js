import { Sequelize } from "sequelize";

const db = new Sequelize("react_sequelize", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

export default db;

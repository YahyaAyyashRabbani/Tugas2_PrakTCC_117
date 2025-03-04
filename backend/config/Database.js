import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tugas2_api", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

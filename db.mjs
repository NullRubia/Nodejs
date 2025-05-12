import mysql from "mysql2";
import { config } from "./config.mjs";

// mysql.createConnection 그때그때 연결
//미리 풀로 연결해둠
const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.database,
  password: config.db.password,
});

export const db = pool.promise();

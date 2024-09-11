import pg from "pg";
const { Pool } = pg;

const dbConfig = {
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "timetracker",
  port: 5432,
};

const pool = new Pool(dbConfig);

export const query = (text: string, params?: string[]) => {
  return pool.query(text, params);
};

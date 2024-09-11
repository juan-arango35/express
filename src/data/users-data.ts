import { query } from "../db";
import { User } from "../models/user";

// Base de datos
export async function indexUsers(): Promise<User[]> {
  const result = await query("SELECT * FROM users;");
  return result.rows;
}

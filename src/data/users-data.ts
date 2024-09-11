import { query } from "../db";
import { User, User2 } from "../models/user";

// Base de datos
export async function indexUsers(): Promise<User[]> {
  const result = await query("SELECT * FROM users;");
  return result.rows;
}

// funcion para filtar
export async function indexUserById(id:string):Promise<User[]> {
  const result = await query("SELECT * FROM users WHERE id = $1;", [id]);
  return result.rows[0];
}


//funcion para eliminar los usuarios restantes
export async function indexDelete(id: string): Promise<User[]> {
  const deleteResult = await query("DELETE FROM users WHERE id = $1 RETURNING *;", [id]);
  // Si no se eliminó ningún usuario, devuelve un array vacío
  if (deleteResult.rowCount === 0) {
    return [];
  }
  const usurariosRestantes = await query("SELECT * FROM users;");
  return usurariosRestantes.rows; 
}

// fucnion para crear un usuario
export async function indexCreate(userData:User2): Promise<User2> {
  const { name, email, role, rate} = userData;

  // Inserta el nuevo usuario en la base de datos
  const result = await query(
    `INSERT INTO users (name, email, role, rate) 
     VALUES ($1, $2, $3, $4) 
     RETURNING *;`,
    [name, email, role, rate]
  );

  // Devuelve el usuario recién creado
  return result.rows[0];
}
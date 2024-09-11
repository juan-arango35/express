import { indexUsers } from "../data/users-data";

// Servicios Logica del negocio
export async function getUsers() {
  const users = await indexUsers();
  // console.log(users);
  return users.sort((a, b) => b.id - a.id);
}

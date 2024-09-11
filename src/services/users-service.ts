import { indexCreate, indexDelete, indexUserById, indexUsers } from "../data/users-data";
import { User2 } from "../models/user";

// Servicios Logica del negocio
export async function getUsers() {
  const users = await indexUsers();
  //console.log(users);
  return users.sort((a, b) => b.id - a.id);
  
}

export async function getUserId(id:string) {
  const user = await indexUserById(id) 

  return user;
}


export async function deleteUserId(id:string) {
  const userresto = await indexDelete(id)
  return userresto;
  
}


export async function crearUser(userData:User2) {
  return await indexCreate(userData)
  
}
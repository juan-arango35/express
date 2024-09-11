import express from "express";
import {  crearUser, deleteUserId, getUserId, getUsers } from "../services/users-service";
import { User2 } from "../models/user";



// Router users
const usersRouter = express.Router();

usersRouter.get("/", async (_req, resp) => {
  try {
    const users = await getUsers();
    resp.status(200).json(users);
  } catch (error) {
    console.log(error);
    resp.status(500).send("Algo salio mal");
  }
});


//para traer el usuario por id
usersRouter.get("/:id", async(req, resp)=>{
  try {
    const {id}=req.params;
    const user = await getUserId(id)
    resp.status(200).json(user)
  } catch (error) {
    console.log(error)
    resp.status(500).send("algo salio mal")
    
  }
})


// para eliminar el usuario por id
usersRouter.delete("/:id", async(req, resp)=>{
  try {
    const {id}= req.params;//obtener el id de los parametros de la ruta
    const deleteUser = await deleteUserId(id)
    if(deleteUser){
      const usuariosrestantes= await getUsers()
      resp.status(200).json({
        message: 'El usuario con id indicado fue eliminado correctamente',
        usuariosrestantes,
      })
    } else {
      resp.status(404).send('El usuario con id no fue encontrado')
    }
  } catch (error) {
    console.log(error)
    resp.status(500).send('algo salio mal en la peticion')
    
  }
})


usersRouter.post("/", async ( req, res)=>{
  try {
    const userData:User2 = req.body;
    const newUser = await crearUser(userData);
    res.status(201).json({
      message: 'Usuarios creado correctamente',
      user: newUser
    })
  } catch (error) {
    console.log(error)
    res.status(500).send('algo salo mal aqui')
    
  }
})


export default usersRouter;




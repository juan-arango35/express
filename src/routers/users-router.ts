import express from "express";
import { getUsers } from "../services/users-service";

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
export default usersRouter;

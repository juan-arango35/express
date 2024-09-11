import express from "express";
import usersRouter from "./routers/users-router";
var morgan = require("morgan");

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
// Morgan
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/users", usersRouter);

app.get(
  "/",
  (req, _res, next) => {
    //console.log(`${req.method} ${req.url}`);
    req.body = "VERIFICACIÓN DEL TOKEN";
    next();
    //res.send("Hola Mundo con Express y TypeScript!");
  },
  (req, resp) => {
    //console.log(req);
    resp.send({ message: `Segundo Handler ${req.body}` });
  }
);

// app.get("/users", (_req, res) => {
//   //console.log(req.query);
//   res.json({
//     users: [
//       { id: 1, nombre: "Joel" },
//       { id: 2, nombre: "Alexis" },
//     ],
//   });
// });

// app.get("/users/:id", (req, resp) => {
//   console.log(req.params);
//   console.log(req.query);
//   resp.json({ id: 1, nombre: "Joel" });
// });

// app.post("/users", (req, resp) => {
//   console.log(req.body);
//   resp.json(req.body);
// });

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

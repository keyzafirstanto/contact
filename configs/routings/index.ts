import { UserController } from "@controllers";
import express from "express";
const app = express.Router();

const routes = () => {

  const UserRoutes = () => {
    const routes = express.Router();
    routes.get("/get_all", UserController.index);
    routes.post("/create", UserController.create);
    routes.put("/update", UserController.update);
    routes.delete("/delete", UserController.delete);
    return routes;
  };

  app.use("/user", UserRoutes());
  return app;
};

app.use("/farmbyte", routes());

export default app;

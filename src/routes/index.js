import { Router } from "express";
import { login } from "./login.js";

const routes = Router();

routes.use("/auth", login);
export { routes };

// app.use()

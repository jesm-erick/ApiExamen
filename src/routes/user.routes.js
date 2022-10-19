import * as userCtrl from "../controllers/user.controller.js";
import { Router } from "express";

const routerUser = Router();


routerUser.post("/register", userCtrl.crearUsuario);


export default routerUser;
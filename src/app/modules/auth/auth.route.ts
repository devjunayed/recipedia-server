import { Router } from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { loginUserValidation } from "./auth.validation";

const router = Router();


router.post("/signin", validateRequest(loginUserValidation), AuthController.loginUser);


export const AuthRoutes = router;
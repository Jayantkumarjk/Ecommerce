import express from "express";
import {
  forgetPasswordCorntroller,
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object

const router = express.Router();

// routing

// REGISTER  || METHOD post
router.post("/register", registerController);

// LOGIN
router.post("/login", loginController);

//Forget password
router.post("/forgot-password", forgetPasswordCorntroller);

// test route
router.get("/test", requireSignIn, isAdmin, testController);

// procted route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//procted Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;

import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login); //define authrout in index.js

export default router;
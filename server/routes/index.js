import express from "express";
import userRoutes from "./userRoutes.js";
import taskRoutes from "./taskRoutes.js";

const router = express.Router();

router.use("/users", userRoutes); 
router.use("/task", taskRoutes);

export default router;

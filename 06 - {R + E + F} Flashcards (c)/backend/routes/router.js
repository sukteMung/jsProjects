import express from "express";
import gets from "./get.js";
import posts from "./post.js";

const router = express.Router();
router.use("/", gets);
router.use("/", posts);

export default router;
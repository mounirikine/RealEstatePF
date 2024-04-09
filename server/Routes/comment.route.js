import express  from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment, getCommentsByReferenceId } from "../Controllers/comment.controller.js";


const router = express.Router();

router.post('/create-comment', verifyToken,createComment)
router.get("/comments/:id", getCommentsByReferenceId);

export default router;
import mongoose from "mongoose";
import Comment from "../Models/Comment.model.js";


export const createComment = async (req, res, next) => {
    try {
        const userId = req.body.userRef;
      

        const commentData = {
            ...req.body,

            userRef: userId,
            commentAbleId: req.body.id,
              
          
        };

        const comment = await Comment.create(commentData);
        return res.status(201).json("Comment has been created successfully");
    } catch (error) {
        next(error);
    }
};


export const getCommentsByReferenceId = async (req, res, next) => {
    try {
        const referenceId = req.params.id; // Assuming the reference ID is passed as a parameter
  
  
        // Find comments based on the reference ID and type
        const comments = await Comment.find({ commentAbleId: referenceId })
        .sort({ createdAt: -1 })
        .populate('userRef', 'avatar');

        return res.status(200).json(comments);
    } catch (error) {
        next(error);
    }
};
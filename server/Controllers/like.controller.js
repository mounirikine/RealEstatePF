import Real from "../Models/Realestate.model.js";
import Like from './models/Like';

export const togglePostLike = async (req, res, next) => {
  try {
    const { realId, userId, postType } = req.body;

    // Find the existing like document
    const existingLike = await Like.findOne({ realId, userId, postType });

    if (existingLike) {
      // If the user has already liked the post, unlike it
      await Like.findOneAndDelete({ realId, userId, postType });

      // Decrease the like count in the post document by 1
      await Real.findByIdAndUpdate(realId, { $inc: { likeCount: -1 } });

      return res.status(200).json({ message: 'Post unliked successfully' });
    } else {
      // If the user has not liked the post, like it
      await Like.create({ realId, userId, postType });

      // Increase the like count in the post document by 1
      await Real.findByIdAndUpdate(realId, { $inc: { likeCount: 1 } });

      return res.status(201).json({ message: 'Post liked successfully' });
    }
  } catch (error) {
    next(error);
  }
};

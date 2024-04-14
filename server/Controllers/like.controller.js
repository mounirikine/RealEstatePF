

//// for the moment
export const togglePostLike = async (req, res, next) => {
    try {
      const { postId, userId, postType } = req.body;
  
      // Check if the user has already liked the post
      const existingLike = await Like.findOne({ postId, userId, postType });
  
      if (existingLike) {
        // Unlike the post if already liked
        await Like.findOneAndDelete({ postId, userId, postType });
        return res.status(200).json({ message: 'Post unliked successfully' });
      } else {
        // Like the post if not already liked
        await Like.create({ postId, userId, postType });
        return res.status(201).json({ message: 'Post liked successfully' });
      }
    } catch (error) {
      next(error);
    }
  };
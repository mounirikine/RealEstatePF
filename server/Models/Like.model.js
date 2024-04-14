import mongoose from 'mongoose';

const LikeSchema = new mongoose.Schema({
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    postType: {
      type: String,
      required: true
    }
  });

const Like = mongoose.model('Like', LikeSchema);
export default Like;
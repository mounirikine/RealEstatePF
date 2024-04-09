import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    text: {
        type: String,
        required: true,
      },
      commentAbleId:{ type:String,

        required: true},
        
      userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference the User model
        required: true
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
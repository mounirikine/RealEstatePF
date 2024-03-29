import User from '../Models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import transporter from '../utils/nodemailer.js';

export const SignUp = async (req,res,next)=>{

    const {username,email,password,phoneNumber} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({
        username,
        email,
        password:hashedPassword,
        phoneNumber
    });

    try {
        await newUser.save();

        res.status(201).json('User created successfully!');
    } catch (error) {
        next(error)
    }
}
export const  SignIn =async (req,res,next)=>{
    const {email,password} = req.body;

    try {
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404,"User not found!"));

        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword) return next(errorHandler(401,"Wrong credentials!"));

        const token  = jwt.sign({id:validUser._id},process.env.JWT_SECRET) //in .env you can put any string
        const {password:pass,...rest} = validUser._doc; // rest is the row of that user  without password
        res.cookie("access_token",token,{httpOnly:true}).status(200).json({rest,token})
    } catch (error) {
        next(error)
    }
}
export const  userInfo =async (req,res,next)=>{
    

    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}
export const signOut =async(req, res, next)=>{
    try {
      res.clearCookie('access_token');
      res.status(200).json('Logged Out!')
    } catch (error) {
      next(error)
    }
  }

  export const UpdateUser = async (req, res, next) => {
    const userId = req.params.userId;
    const { username, email, password,avatar ,phoneNumber} = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return next(errorHandler(404, "User not found!"));

        // Update user fields if provided
        if (username) user.username = username;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (password) {
            const hashedPassword = bcryptjs.hashSync(password, 10);
            user.password = hashedPassword;
        }
        if(avatar) user.avatar =avatar;
        
        await user.save();

        const { password: pass, ...rest } = user._doc;
        res.status(200).json(rest);
        
    } catch (error) {
        next(error);
    }
};
//irgv uxtg sijs carm
export const forgotPass = async (req, res, next) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) return next(errorHandler(404, 'User not exist!'));
      
    
    const secret = process.env.JWT_SECRET + oldUser.password;
    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      secret,
      {
        expiresIn: '5m',
      }
    );
   
    const linkR = `http://localhost:5173/forgot-pass/${oldUser._id}/${token}`;
    try {
        const mailOptions = {
          from: 'hightllevel@gmail.com',
          to: email,
          subject: 'Reset Password',
          text: linkR,
        };
  
        await transporter.sendMail(mailOptions);
       
        res.json({ success: true, message: 'Email sent successfully' });
      } catch (error) {
        
        res.status(500).json({ success: false, message: 'Error sending email' });
      }
   
  

  } catch (error) {
    next(error);
  }
};

export const resetPass = async (req, res, next) => {

    const { id, token } = req.params;

    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) return next(errorHandler(404, 'User not exist!'));
        
    
    const secret = process.env.JWT_SECRET + oldUser.password;
    try {
      const verify = jwt.verify(token, secret);
      
    } catch (error) {
      next(error)
      res.send("Not Verified");
    }
  
  }
  
  export const ResetPass =async (req,res,next)=>{
    const { id, token } = req.params;
  const { password } = req.body;

  try {
    if (!password) {
      return res.json({ success: false, statusCode: 400, message: "Password is required" });
    }

    const oldUser = await User.findOne({ _id: id });

    if (!oldUser) {
      return res.json({ success: false, statusCode: 404, message: "User Not Exists!!" });
    }

    const secret = process.env.JWT_SECRET + oldUser.password;

    const verify = jwt.verify(token, secret);

    const encryptedPassword = bcryptjs.hashSync(password, 10);

    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );

  
  } catch (error) {
    next(error);
    
    res.json({ success: false, statusCode: 500, message: error.message });
  }
  }
  export const google = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = user._doc;
        res
          .cookie('access_token', token, { httpOnly: true })
          .status(200)
          .json({rest,token});
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
        const newUser = new User({
          username:
            req.body.name.split(' ').join('').toLowerCase() +
            Math.random().toString(36).slice(-4),
          email: req.body.email,
          password: hashedPassword,
          avatar: req.body.photo,
        });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = newUser._doc;
        res
          .cookie('access_token', token, { httpOnly: true })
          .status(200)
          .json({rest,token});
      }
    } catch (error) {
      next(error);
    }
  };

  export const contact = async (req, res, next) => {
    const { name,email,phone, message } = req.body;
    
    try {
      const mailOptions = {
        from: 'hightllevel@gmail.com', // Use your own email address as the sender
        to: 'hightllevel@gmail.com',
        subject: `Contact us - From: ${email}`, // Include sender's email in the subject
        text: `Sender's Email: ${email}\n\n${message}`, // Include sender's email in the body
      };
  
      await transporter.sendMail(mailOptions);
  
      res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error sending email' });
    }
  };
  

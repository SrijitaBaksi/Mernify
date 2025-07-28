import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const tokenOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'None',
  maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
  path: '/',
};

//signup

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    console.log('🔍 User exists:', userExists);

    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '10d' });

    res.status(201).cookie('token',token,tokenOptions).json({
      token,
      user: {
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: err.message });
  }
};


export const login = async(req,res)=>{
    const {email,password} = req.body;


    try{
        const user= await User.findOne({ email });
        if(!user) return res.status(400).json({message:'User does not exist'})
        
        const isMatch = await bcrypt.compare(password,user.password) 
        if(!isMatch) return res.status(400).json({message:'Invalid password'})
         
        const token =jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'10d'})    

        res.status(200).cookie('token',token,tokenOptions).json({
            token,
            user:{
                username:user.username,
                email:user.email
            }
        })
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const logout = async(req, res)=>{
  try{
      res.clearCookie('token', {
      httpOnly: false,
      secure: false,
      sameSite: 'Lax',
      path: '/'
    })

    res.status(200).json({message: "Logged out succesfully"})
  }catch(error){
    console.log(error);
    res.status(500).json({message: "Failed to logout please try again later"})
  }
}


export const getMe = async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'No token. Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
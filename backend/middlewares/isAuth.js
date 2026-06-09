import jwt from "jsonwebtoken";
const isAuth = async (req, res, next) => {
  try {
    const token=req.cookies.token;
    if(!token){
      return res.status(401).json({ message: "Unauthorized" });
    }
    const verifyToken=jwt.verify(token,process.env.JWT_SECRET);
    req.userId=verifyToken.id;
    next();
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
export default isAuth;
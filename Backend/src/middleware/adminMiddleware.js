const adminonly = (req,res,next)=>{// in express, the middleware accept 3 parameter req,res,next()

//this checks the user role = admin if not admin  return only admin allowed--If the role is not "admin", the user should not access the route.
if(req.user.role !== "admin"){
return res.status(403).json({success:false ,message: "Only Admin Can Access..."});
}
next();


}
module.exports = adminonly;

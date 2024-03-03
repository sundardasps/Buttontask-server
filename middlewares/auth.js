import connection from "../model/authorization.js";

async function auth(req, res, next) {
  if (req.headers.authorization) {
    const authKey = req.headers.authorization.split(" ")[1];
    if (authKey) {
      next();
    } else {
      return res.status(401).json({Message:"Unauthorized"});
    }
  } else {
    return res.status(401).json({Message:"Unauthorized"});
  }
}

export default auth;

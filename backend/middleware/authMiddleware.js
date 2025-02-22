import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied, admin only" });
    }
    next();
  } catch (err) {
    res.status(401).json({ error: "Token is not valid" });
  }
};

export default authMiddleware;
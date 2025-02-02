import { verifyJWT } from '../utils/jwt.js';

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(400).json({
        success: false,
        message: 'Token is required',
      });
    }
    const response = verifyJWT(token);
    if (!response) {
      return res.status(403).json({ error: 'Invalid data send from client' });
    }
    const user = await userRepository.getById(response.id);
    req.user = user.id;
    next();
  } catch (error) {
    if (
      error.name === 'JsonWebTokenError' ||
      error.name === 'TokenExpiredError'
    ) {
      return res.status().json({
        error: 'Invalid data sent from the client',
      });
    }
    return res.status(500).json(internalErrorResponse(error));
  }
};

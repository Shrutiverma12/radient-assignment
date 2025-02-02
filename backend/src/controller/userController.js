import { signInService, signUpService } from '../services/userService.js';

export const signUp = async (req, res) => {
  try {
    const user = await signUpService(req.body);
    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: user,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export async function singin(req, res) {
  try {
    const response = await signInService(req.body);
    return res.status(200).json({
      success: true,
      message: 'User signed in successfully',
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
}

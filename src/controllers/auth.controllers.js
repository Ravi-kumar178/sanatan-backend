import {User} from "../models/user.models.js";
import {asyncHandler} from "../utils/async-handler.js";
import {ApiResponse} from "../utils/api-response.js"

const registerUser = asyncHandler(async(req, res) => {
    const {email,body} = req.body;
});

const googleLoginSuccess = asyncHandler(async (req, res) => {
   const user = req.user;

   if (!user) {
      throw new ApiError(401, "Google authentication failed");
   }

   const accessToken = user.generateAccessToken();
   const refreshToken = user.generateRefreshToken();

   user.refreshToken = refreshToken;

   await user.save({ validateBeforeSave: false });

   return res.status(200).json(
      new ApiResponse(
         200,
         {
            user,
            accessToken,
            refreshToken,
         },
         "Google login successful"
      )
   );
});

export {registerUser, googleLoginSuccess};
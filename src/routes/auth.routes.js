import { Router } from "express";
import passport from "../utils/passport.js";
import {
  changeUserPassword,
  deleteCurrentUser,
  getCurrentUser,
  googleLoginSuccess,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  requestPasswordReset,
  resendEmailVerification,
  resetPassword,
  updateCurrentUser,
  verifyEmail,
} from "../controllers/auth.controllers.js";
import {
  changePasswordValidator,
  forgotPasswordValidator,
  passwordResetValidator,
  userRegisteredValidator,
} from "../validators/index.js";
import { validate } from "../middlewares/validator.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  googleLoginSuccess,
);

router
  .route("/register")
  .post(userRegisteredValidator(), validate, registerUser);

router.route("/login").post(userRegisteredValidator(), validate, loginUser);
router.route("/verify-email/:verificationToken").get(verifyEmail);
router
  .route("/forgot-password")
  .post(forgotPasswordValidator(), validate, requestPasswordReset);

router
  .route("/reset-password/:resetToken")
  .post(passwordResetValidator(), validate, resetPassword);

router.route("/refresh-token").post(refreshAccessToken);

//secured
router.route("/logout").post(verifyJWT, logoutUser);
router
  .route("/resend-email-verification")
  .post(verifyJWT, resendEmailVerification);

router.route("/current-user").get(verifyJWT, getCurrentUser);
router
  .route("/current-user/:userId")
  .put(verifyJWT, updateCurrentUser)
  .delete(verifyJWT, deleteCurrentUser);

router
  .route("/change-password")
  .post(changePasswordValidator(), validate, verifyJWT, changeUserPassword);

export default router;

import { body, param } from "express-validator";

const userRegisteredValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is not valid"),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];
};

const changePasswordValidator = () => {
  return [
    body("oldPassword")
      .trim()
      .notEmpty()
      .withMessage("Old Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),

    body("newPassword")
      .trim()
      .notEmpty()
      .withMessage("New Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];
};

const forgotPasswordValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is not valid"),
  ];
};

const passwordResetValidator = () => {
  return [
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),

    param("resetToken")
      .trim()
      .notEmpty()
      .withMessage("Reset token is required"),
  ];
};

export {
  userRegisteredValidator,
  changePasswordValidator,
  forgotPasswordValidator,
  passwordResetValidator
};

import { body, param } from "express-validator";
import {
  AvailableAdminRolesEnum,
  AvailableUserCourseStatus,
} from "../utils/constant.js";

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

const adminRequestValidator = () => {
  return [
    body("role")
      .trim()
      .notEmpty()
      .withMessage("Role is required")
      .isIn(AvailableAdminRolesEnum)
      .withMessage("You can select only from the given admin roles"),
  ];
};

const createCourseValidator = () => {
  return [
    body("title").trim().notEmpty().withMessage("Course Title is required"),

    body("label").trim().notEmpty().withMessage("Course Label is required"),
    body("totalPrice")
      .notEmpty()
      .withMessage("Course -> Total price is required")
      .isInt()
      .withMessage("Total price must be integer"),
  ];
};

const updatePurchasedCourseStatusValidator = () => {
  return [
    body("status")
      .trim()
      .isIn(AvailableUserCourseStatus)
      .withMessage("Wrong status"),

    body("validity")
      .isDate()
      .withMessage("validity should be date"),

    param("userId")
      .isMongoId()
      .withMessage("Invalid user id"),

    param("courseId")
      .isMongoId()
      .withMessage("Invalid course id"),
  ];
};

export {
  userRegisteredValidator,
  changePasswordValidator,
  forgotPasswordValidator,
  passwordResetValidator,
  adminRequestValidator,
  createCourseValidator,
  updatePurchasedCourseStatusValidator
};

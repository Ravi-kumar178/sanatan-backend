import express from "express";
import {
  verifyJWT,
  validateUserPermission,
} from "../middlewares/auth.middlewares.js";
import { UserRolesEnum } from "../utils/constant.js";
import {
  createCourse,
  deleteCourse,
  getAllCourse,
  getCourseById,
  updateCourse,
} from "../controllers/course.controllers.js";
import { validate } from "../middlewares/validator.middlewares.js";
import { createCourseValidator } from "../validators/index.js";

const router = express.Router();

router
  .route("/")
  .post(
    createCourseValidator(),
    validate,
    verifyJWT,
    validateUserPermission([
      UserRolesEnum.COURSE_ADMIN,
      UserRolesEnum.CUSTOMER_PANEL_ADMIN,
    ]),
    createCourse,
  )
  .get(getAllCourse);

router
  .route("/:courseId")
  .put(
    verifyJWT,
    validateUserPermission([
      UserRolesEnum.COURSE_ADMIN,
      UserRolesEnum.CUSTOMER_PANEL_ADMIN,
    ]),
    updateCourse,
  )
  .get(getCourseById)
  .delete(
    verifyJWT,
    validateUserPermission([
      UserRolesEnum.COURSE_ADMIN,
      UserRolesEnum.CUSTOMER_PANEL_ADMIN,
    ]),
    deleteCourse
  );

export default router;

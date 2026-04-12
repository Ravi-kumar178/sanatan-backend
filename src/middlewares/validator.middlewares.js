import { validationResult } from "express-validator";

const validate = async (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  }

  const extractedErrors = [];
  errors
    .array()
    .forEach((error) => extractedErrors.push({ [error.path]: error.msg }));

  console.log(extractedErrors);
  throw new ApiError(422, "Received data is not valid", extractedErrors);
};

export { validate };

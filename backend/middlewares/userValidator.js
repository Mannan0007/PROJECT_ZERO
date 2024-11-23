import { check, validationResult } from "express-validator";

export const validateUserRegistration = [
  check("email").isEmail().withMessage("Invalid email format"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  check("role")
    .optional()
    .isIn(["admin", "student", "teacher"])
    .withMessage("Invalid role"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
import { Router } from "express";
import passport from "../utils/passport.js";
import { googleLoginSuccess } from "../controllers/auth.controllers.js";

const router = Router();

router.get(
   "/google",
   passport.authenticate("google", {
      scope: ["profile", "email"],
   })
);

router.get(
   "/google/callback",
   passport.authenticate("google", {
      failureRedirect: "/login",
      session: false,
   }),
   googleLoginSuccess
);

export default router;
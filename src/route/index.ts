import * as express from "express";
import AuthController from "../controllers/AuthController";
import { authenticate } from "../middlewares/Auth";
import ProductController from "../controllers/ProductController";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("hello from v1");
});

router.post("/auth/register", AuthController.register);
router.post("/auth/signin", AuthController.login);
router.get("/auth/check", authenticate, AuthController.check);

router.post("/product/create", authenticate, ProductController.create);
router.get("/product/get", authenticate, ProductController.get);

export default router;

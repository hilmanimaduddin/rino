import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import ProductService from "../services/ProductService";

class ProductController {
  create(req: Request, res: Response) {
    ProductService.create(req, res);
  }
  get(req: Request, res: Response) {
    ProductService.get(req, res);
  }
}
export default new ProductController();

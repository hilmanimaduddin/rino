import { Repository } from "typeorm";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
import jwt = require("jsonwebtoken");
import bcrypt = require("bcrypt");

class ProductService {
  private readonly productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  async create(req: Request, res: Response) {
    try {
      const data = req.body;

      const post = this.productRepository.create({
        name: data.name,
        price: data.price,
      });

      const createdProduct = await this.productRepository.save(post);
      return res.status(200).json(createdProduct);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async get(req: Request, res: Response) {
    try {
      const data = await this.productRepository.find();

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json("Theres an error ");
    }
  }
}

export default new ProductService();

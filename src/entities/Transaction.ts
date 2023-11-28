import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";
import { Customers } from "./Customer";

@Entity({ name: "transactions" })
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  invoiceNumber: number;

  @ManyToOne(() => Product, (transaction) => transaction.id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  product: Product;

  @ManyToOne(() => Customers, (transaction) => transaction.id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  customer: Customers;

  @Column()
  Qty: number;

  @Column()
  Total_Amount: number;

  @Column()
  Total_Count: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  invoiceDate: Date;
}

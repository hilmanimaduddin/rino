import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "customers" })
export class Customers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

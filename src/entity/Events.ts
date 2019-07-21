import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum Department {
  ALL = "all",
  ARCHI = "archi",
  CHEM = "chem",
  CSE = "cse",
  ECE = "ece",
  EEE = "eee",
  ICE = "ice",
  PROD = "prod",
  MECH = "mech",
  META = "meta"
}

@Entity()
export class Events {
  @PrimaryGeneratedColumn()
  event_id: number;

  @Column("longtext")
  name: string;

  @Column("boolean")
  allDay: boolean;

  @Column("datetime")
  start: Date;

  @Column("datetime")
  end: Date;

  @Column("varchar")
  bgColor: string;

  @Column("varchar")
  description: string;

  @Column({
    type: "enum",
    enum: Department
  })
  department: Department;
}

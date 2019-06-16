import { Entity,PrimaryGeneratedColumn,Column, Unique } from "typeorm";

export enum Department{
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
@Unique(["link"])
export class Books{

    @PrimaryGeneratedColumn()
    book_id:number;

    @Column("varchar")
    name:string;

    @Column("varchar")
    link:string;

    @Column({
        type:"enum",
        enum: Department
    })
    department:Department;
}
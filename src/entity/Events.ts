import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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
export class Events{

    @PrimaryGeneratedColumn()
    event_id:number;

    @Column("varchar")
    name:string;

    @Column("longtext")
    description:string;

    @Column("datetime")
    date:Date;

    @Column({
        type:"enum",
        enum:Department
    })
    department:Department;
    
}
import {Entity, PrimaryColumn, Column} from "typeorm";
export enum Department{
    ARCHI = "archi",
    CHEM = "chem",
    ECE = "ece",
    EEE = "eee",
    ICE = "ice",
    PROD = "prod",
    MECH = "mech"
}
@Entity()
export class User {

    @PrimaryColumn("int")
    roll_number:number;

    @Column("varchar", { length:255})
    name: string;

    @Column("varchar", {length:255})
    password: string;

    @Column({
        type:"enum",
        enum: Department
    })
    department: Department;

    @Column("binary")
    isAdmin: boolean;

}

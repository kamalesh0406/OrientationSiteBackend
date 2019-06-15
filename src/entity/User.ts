import {Entity, PrimaryColumn, Column} from "typeorm";

export enum Department{
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

export enum BloodGroup{
    Opos = "O+",
    Oneg = "O-",
    Apos = "A+",
    Aneg = "A-",
    Bpos = "B+",
    Bneg = "B-",
    ABpos = "AB+",
    ABneg = "AB-" 
}

@Entity()
export class User {

    @PrimaryColumn("int")
    roll_number:number;

    @Column("varchar", {length:255})
    name:string;

    @Column("date")
    DOB:Date;

    @Column({
        type:"enum",
        enum:BloodGroup
    })
    blood_group:BloodGroup;
    
    @Column("varchar", {length:20})
    phone_number:string;

    @Column({
        type:"enum",
        enum: Department
    })
    department: Department;

    @Column("varchar", {length:255})
    password:string;

    @Column("binary")
    is_admin: boolean;

}

import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from "typeorm";
import {User} from "./User";

export enum Size{
    S="S",
    M="M",
    L="L",
    XL="XL"
}

@Entity()
export class Tshirt{

    @PrimaryGeneratedColumn()
    tshirt_id: number;

    @Column({
        type: "enum",
        enum: Size
    })
    size:Size;

    @OneToOne(type => User)
    @JoinColumn()
    name: User;


}
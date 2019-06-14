import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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

}
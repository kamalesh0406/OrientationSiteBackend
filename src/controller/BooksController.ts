import { Request, Response} from "express";
import { getRepository } from "typeorm";
import { Books } from "../entity/Books";

class BooksController{
    static add =  async (req: Request, res: Response) =>{
        if(!(res.locals.jwtPayload)){
            res.status(404).send();
        }

        let {name, link, department} =  req.body;

        let book = new Books()
        book.name = name;
        book.link = link;
        book.department = department;

        let bookRepository = getRepository(Books);

        try{
            await bookRepository.save(book);
        }catch(error){
            res.status(400).send("Send valid values");
        }

        res.status(200).send("Saved");
    };

    static details = async (req: Request, res:Response)=>{
        let { department } =  req.body;

        let bookRepository = getRepository(Books);
        let book:any;

        try{
            book = await bookRepository.find({ where: {department: department} });
        }catch(error){
            res.status(400).send("Department Book doesnot exist");
        }

        res.json(book);
    }
}

export default BooksController;
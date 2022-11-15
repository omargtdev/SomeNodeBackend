import { getConnection } from "../../database/connection"
import { Category } from "../../entity";
import messages from "../../utils/messages";


export const categoriesGetController = async (req: any, res: any) => {
    try {
        const conn = await getConnection();
        const getCategories = await conn?.query('SELECT * FROM TechbizCategory'); 

        const categories: Array<Category> = (getCategories?.[0] as Array<Category>)  

        res.status(200).json(messages.resultFound({ categories }));

    } catch (err) {
        res.status(500).json(messages.sqlError);
        console.log(`ERROR - Categories GET -> ${err}`)
    }finally{
        res.end();
    }
}
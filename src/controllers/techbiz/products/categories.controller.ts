import { getConnection } from "../../../database/connection"
import { Category, Product } from "../../../entity";
import messages from "../../../utils/messages";


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

export const productsCategoryByIdGetController = async (req: any, res: any) => {
    try {

        const { id } = req.params;       

        const conn = await getConnection();
        const result = await conn?.query(`call usp_GetProducts_ByCategory(${id})`); 

         const getProducts: any[] = (result?.[0] as any[]);
        const products: Array<Product> = (getProducts?.[0] as Array<Product>)  

        res.status(200).json(messages.resultFound({ products }));

    } catch (err) {
        res.status(500).json(messages.sqlError);
        console.log(`ERROR - Categories GET -> ${err}`)
    }finally{
        res.end();
    }
}
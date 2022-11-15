import { getConnection } from "../../../database/connection";
import { Product } from "../../../entity";
import messages from "../../../utils/messages";

export const softwareProductGetController = async (req: any, res: any) => {
   try {
      const conn = await getConnection();
      const getProducts = await conn?.query('SELECT * FROM TechbizProduct WHERE CategoryID = 2');

      const products: Array<Product> = (getProducts?.[0] as Array<Product>);

      res.status(200).json(messages.resultFound({ products }));

   } catch (err) {
        res.status(500).json(messages.sqlError);
        console.log(`ERROR - Software Product GET -> ${err}`)
   } finally {
      res.end();
   }
}
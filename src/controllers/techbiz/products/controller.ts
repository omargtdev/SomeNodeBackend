import { getConnection } from "../../../database/connection";
import { Product } from "../../../entity";
import messages from "../../../utils/messages";
import { Tools } from "../../../utils/tools";

export const productsGetController = async (req: any, res: any) => {
   try {
      const { selectedIds } = req.query;

      const selectedIdsIsProvided = !(selectedIds === undefined || selectedIds.trim() === "");

      let query: string = "call usp_GetAllProducts()";

      if(selectedIdsIsProvided){
         // Convert Ids into array separated with ',' and clean them
         const ids: string[] = (selectedIds as string).trim().split(',').map(id => id.trim());
         
         const cleanIds: number[] = ids.filter(Tools.isInteger).map(Number);

         query = `SELECT * FROM TechbizProduct WHERE ProductID IN (${cleanIds.join()})`;

      }

      const conn = await getConnection();
      const result = await conn?.execute(query);

      let products: Array<Product>;

      if(!selectedIdsIsProvided){
         const getProducts: any[] = (result?.[0] as any[]);
         products = (getProducts?.[0] as Array<Product>);
      }else{
         products = (result?.[0] as Array<Product>);
      }

      res.status(200).json(messages.resultFound({ products }));

   } catch (err) {
        res.status(500).json(messages.sqlError);
        console.log(`ERROR - Products GET -> ${err}`)
   } finally {
      res.end();
   }
}
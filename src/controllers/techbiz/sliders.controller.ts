import { getConnection } from "../../database/connection";
import { Slider } from "../../entity";
import messages from "../../utils/messages";


export const slidersGetController = async (req: any, res: any) => {
   try {
      const conn = await getConnection();
      const getSliders = await conn?.query('SELECT * FROM TechbizSlider');

      const sliders: Array<Slider> = (getSliders?.[0] as Array<Slider>);

      res.status(200).json(messages.resultFound({ sliders }));

   } catch (err) {
        res.status(500).json(messages.sqlError);
        console.log(`ERROR - Sliders GET -> ${err}`)
   } finally {
      res.end();
   }
}
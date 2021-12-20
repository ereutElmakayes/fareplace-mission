import axios from "axios";
import { Auction } from "../../entities/Auction";
import { environment } from "../../environment";


class AuctionService {
    async getAll(): Promise<Auction[]> {
        try {
            let auctions: Auction[] = [];
            const res = await axios.get(environment.localServerUrl, {
                headers: {  "Access-Control-Allow-Origin": "*" , }
               } );
            res.data.map((r: any, i: number) => {
                auctions.push(new Auction({
                    ...r
                }));
            })
         return auctions;
        } catch (err) {
            throw err;
        }
    }
}
  

  export default new AuctionService() as AuctionService;
 export class Auction{
    id: string;
    auctionType:  string;
    roundTrip: boolean;
    startDate:number;
    endDate: number;
    bidingStarted:  boolean;
    quantity: number;
    numberOfWinners:number;
    isPaymentWasDone:  boolean;
    viewersCount:  number;
    numberOfBidders: number;
    isFollow: boolean;
    withTimingFilter:boolean;
    isLive: boolean;
    currentMinPrice:number;
    originalPrice: number;
    discount:number;
    maxPrice: number;
    minBidInc: number;
    startingPrice: number;
    currency: string;
    currencySymbol: string;
    inboundId: string;
    outboundId: string;
    imageUrl: string;
    constructor(args?: Partial<Auction>) {
      if (typeof args !== 'undefined' && typeof args === 'object') {
        Object.assign(this, args);
      } 
    }
}
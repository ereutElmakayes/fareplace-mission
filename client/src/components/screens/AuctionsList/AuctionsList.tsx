import { useCallback, useEffect, useState } from 'react';
import auctionService from '../../../Axios/services/auction.service';
import { Auction } from '../../../entities/Auction';
import AuctionItem from '../../content/AuctionItem/AuctionItem';
import AuctionProps from './AuctionProps'
import Skeleton from '@mui/material/Skeleton';
import { Loader } from '../../core/Loader/Loader';


const AuctionsList = (props: AuctionProps) => {
    const [auctions, setAuctions] = useState<Auction[] | undefined>(undefined)
    const fetchAuctions = useCallback(async () => {
            const _auction = await auctionService.getAll();
            setAuctions(_auction);
        
    }, [setAuctions])

    useEffect(() => {
        fetchAuctions()
    }, [])
    if(auctions && auctions?.length > 0)
    return (
        <div className='d-flex flex-wrap'>
                {auctions.map((item: any, index: number) => (
                   <AuctionItem data={item}/> ))}
        </div>
        
    )
    return(<Loader/>)
}

export default AuctionsList

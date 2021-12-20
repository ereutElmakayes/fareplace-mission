import React from 'react'
import "./AuctionItem.scss"
import AuctionItemProps from './AuctionItemProps'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export const AuctionItem = (props: AuctionItemProps) => {
    return (
         <div className='auction-item'>
         
        <Card >
        <CardMedia
          component="img"
          height="140"
          image={props.data.imageUrl}
          alt="auction"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.data.outboundId} -  {props.data.inboundId}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.data.viewersCount} viewing this
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          Now from {props.data.startingPrice}{props.data.currencySymbol}
          </Typography>
        </CardContent>
        <CardActions>
            
        </CardActions>
        
      </Card>
      </div>
    )
}
export default AuctionItem
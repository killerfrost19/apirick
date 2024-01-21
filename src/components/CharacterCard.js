import React from 'react'
import { Card, CardContent, CardMedia, Typography,Avatar} from '@mui/material'
import { grey } from '@mui/material/colors';

export default function CharacterCard({item }) {

    let bkg=grey;
    if(item.status==='Alive')  bkg='Green'
    else if(item.status==='Dead')  bkg='Red'
  return (
    <Card sx={{width:'300px', borderShadow:'none', borderRadius:'20px',margin:'10px'}}>
        
            <CardMedia image={item.image}
            sx={{width:'300px', height:'180px' }}/>
            <CardContent sx={{background:'rgb(8, 63, 66)', height:'70px'}}>
            <Typography variant='body1' fontWeight='bold' color='#FFF' >{item.name}</Typography> 
            <Avatar sx={{ bgcolor:bkg, width:'45px',height:'15px',
             marginTop:'5px', fontSize:'10px', borderRadius:'5px' }} variant='square' > {item.status}
            </Avatar>
            <Typography variant='body2' color='white' marginTop='5px' sx={{opacity:'0.8'}}>{item.species}</Typography>
            </CardContent>
           
       
    </Card>
  )
 }

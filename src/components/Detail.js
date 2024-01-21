import React from 'react'
import { useLocation } from 'react-router-dom';
import { CardMedia, Typography, Card } from '@mui/material';

export default function Detail() {
   
    const { state } = useLocation();
    if (!state||!state.character) {
      return <div>No character data available</div>;
    }
    const { name, image,gender,status,type, species, origin:{name:originName}, location:{name:locationName}} = state.character;
    return (
      
      <Card sx={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(45,45,167,0.9866071428571429) 0%, rgba(0,212,255,1) 100%);', justifyContent:'center', alignItems: 'center',margin: 'auto',
       boxShadow:'10px 10px 30px grey', textAlign: 'center',pt:'10px'}} variant="outlined">
        <Typography variant='h4' sx={{fontWeight:'bold', fontFamily:"Lato",margin:'20px', textAlign: 'center'}}>
        {name.toUpperCase()}</Typography>
        <CardMedia image={image} sx={{width: '340px',height: '340px', borderRadius:'100%',margin:'auto'}}/>
        
        <Typography  sx={{margin:'5px'}}>GENDER : {gender.toUpperCase()}</Typography>
        <Typography  sx={{margin:'5px'}}>STATUS : {status.toUpperCase()}</Typography>
        <Typography  sx={{margin:'5px'}}>SPECIES : {species.toUpperCase()}</Typography>
        <Typography  sx={{margin:'5px'}}>LAST KNOWN LOCATION : {locationName.toUpperCase()}</Typography>
        <Typography  sx={{margin:'5px'}}>FIRST SEEN IN : {originName.toUpperCase()}</Typography>
        <Typography  sx={{margin:'5px'}}>TYPE : {type? type.toUpperCase():'UNKNOWN'}</Typography>
    </Card>
 

    );
}

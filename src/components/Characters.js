import React,{useState,useEffect} from "react";
import {Stack,Box, Typography} from '@mui/material'
import { fetchCharacter} from '../fetchAPI'
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";


export default function Characters(){

    const [characters, setCharacters] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data= await fetchCharacter(`/character`);
          setCharacters(data.results);
          console.log(data.results);
        } catch (error) {
          console.error("error in detail- character",error)
        }
      }
      fetchData();},[]);
      if(!characters) return null;
    return (
        <>
        <Typography sx={{display:'flex', justifyContent:'center', alignItems: 'center',fontSize:'40px',
           fontWeight:'bold', fontFamily:'fantasy',backgroundColor: 'rgb(237, 245, 243)'}}>RICK AND MORTY CHARACTERS</Typography>
        <Stack
        direction={{xs:'column', md:'row'}} flexWrap='wrap' 
        justifyContent='center' gap={2}
        sx={{backgroundColor: 'rgb(237, 245, 243)'}}>
          
            {characters.map((item,idx)=>{
                return (
                    <Box key={idx} >
                        
                     {item.id &&(<Link to ={`/character/${item.id}`} state={{ character: item }}
                     style={{ textDecoration: 'none' }}><CharacterCard item={item}/>
                     </Link>)}
                    </Box>
                )
            })}
        </Stack>
        </>
    )
}
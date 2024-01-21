import axios from "axios";

const BASE_URL="https://rickandmortyapi.com/api";

 export const fetchCharacter= async(url)=> {
    try{
       const response=await axios.get(`${BASE_URL}${url}`);
       return response.data;    
    }catch(error){
        console.error("error fetching character",error);
        throw error;
    }
}



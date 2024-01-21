import React from 'react'
import { Button } from '@mui/material'
import ReactPaginate from 'react-paginate';

function Paginate({pageNumber,setPageNumber}) {
  let prev=()=>{
    if(pageNumber==1) return ;
    setPageNumber((a)=>a-1)
  }
  let next=()=>{
    setPageNumber((a)=>a+1)
  }

  return (
    
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Button variant='contained'  sx={{ margin: 2 }} onClick={prev}>Prev</Button>
    <Button variant='contained'  sx={{ margin: 2 }} onClick={next}>Next</Button>
    </div>
  )
}

export default Paginate
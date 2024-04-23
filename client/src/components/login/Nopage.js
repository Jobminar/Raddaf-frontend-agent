import React from 'react'
import error from '../error.jpg'
const Nopage = () => {
  return (
    <div style={{marginTop:"10px",width:"100%", height:"100%",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
     <center> <img src={error} width="100%" height="100%"/></center>
    </div>
  )
}

export default Nopage

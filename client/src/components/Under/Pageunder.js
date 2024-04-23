import React from 'react'
import { useNavigate } from 'react-router-dom'
import backarrow from '../Images/backarrow.png'


const Pageundercuntruction = () => {
    const navigate = useNavigate()

  return (
    <>
    <div className='list-hea'>
        <img src={backarrow} alt='back-arrow' onClick={() => { navigate('/') }} />
        <h1>This Page is Under Construction</h1>
      </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div>
            <div style={{textAlign:"center",padding:"0px 0px 20px"}}>
            <h1>This page is Under Construction</h1>
            </div>
            <div>
            <img style={{width:"90%",height:"100%",marginLeft:"5%",marginBottom:"5%"}} src="https://h2o-digital.com/wp-content/uploads/2015/09/websites-why-you-should-never-use-under-construction-pages.jpg" alt='This Page is Under contruction'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Pageundercuntruction
import React from 'react'
import './propertyviewpage.css'
import bedroomlogo from '../Images/bedsymbol.png';
import toilet from '../Images/toilet-logo.png';
import washroom from '../Images/washroom.png';
import parking from '../Images/car.png';
import { useLocation } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import backarrow from '../Images/backarrow.png'
import { useNavigate } from 'react-router-dom';
// mui
import DirectionsIcon from '@mui/icons-material/Directions';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import {dimmentions} from "./propertydata.js"


const Propertyviewpage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
      };
    
    const selectedProperty= location.state ? location.state.selectedproperty : null;
    const data = selectedProperty
    console.log(data)


    // image switch
    const [mainImage, setMainImage] = useState('');

    const clicktop = (imageSrc) => {
      setMainImage(imageSrc);
    };

    const under=()=>{
        navigate("/underconstruction")
      }

      const makeoffer = () => {
        setOpen(true);
      };

  return (
    <>
         {/* <div>
            {data && Object.entries(data).map(([key, value]) => (
                <div key={key}>
                    <strong>{key}: </strong> {typeof value === 'object' ? JSON.stringify(value) : value}
                </div>
            ))}
        </div> */}
        <div className='backarrow'>
            <img src={backarrow} alt='backarrow' onClick={()=>{navigate('/myrentalrequests')}}/>
        </div>
       {/* <div className='propertyviewpage-con'>
            <div className='property-image-con'>
                <div className='property-main-img'>
                       {mainImage ? (
                            <img src={mainImage} alt="Main" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                            ) : (
                                data.images.length > 0 && <img src={selectedobject.images[0].Value} alt="First" />
                       )}
                </div>
                <div className='property-sub-img'>
                     {data.images.map((image, index) => (
                                <div key={index} onClick={() => clicktop(image.Value)} className='sub-img-con-rental'>
                                <img src={image.Value} alt={`Image ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                                </div>
                     ))}
                </div>
            </div>
            <div className='property-section-2'>
                <div className='property-section-2-left'>
                    <div className='address-roomdetails'>
                        <div className='address-details'>
                          <h1>{data.place}</h1>
                          <p>{data.noOfBedrooms} bedroom flat for rent</p>
                        </div>
                       
                        <div className='room-details'>
                            <div>
                                <img src={bedroomlogo} alt='bedroomlogo'/>
                                {data.noOfBedrooms}
                            </div>   
                            <div>
                                <img src={toilet} alt='toilet'/>
                                {data.noOfToilets}
                            </div> 
                            <div>
                                <img src={washroom} alt='washroom'/>
                                {data.noOfBathrooms}
                            </div> 
                            <div>
                                <img src={parking} alt='parking'/>
                                {data.parkingCapacity}
                            </div>  
                        </div>
                    </div>
                    <div className='distances'>
                        <div className='distances-sub'>
                            Hospital
                            <div>
                                <DirectionsIcon/>
                                {data.nearby.hospital.distance} Km
                            </div>
                        </div>
                        <div className='distances-sub'>
                            School
                            <div>
                                <DirectionsIcon/>
                                {data.nearby.school.distance} Km
                            </div>
                        </div>
                        <div className='distances-sub'>
                            Busstation
                            <div>
                                <DirectionsIcon/>
                                {data.nearby.busStation.distance} Km
                            </div>
                        </div>
                    </div>
                </div>
                <div className='property-section-2-right'>
                    <div className='contact-no'>
                      {data.contactDetails.phoneNumber}
                    </div>
                    <div className='mail-id'>
                        <EmailIcon/>
                        {data.contactDetails.email}                    
                    </div>
                    <div className='book-viewings'>

                        Book service
                    </div>
                    <div className='sharethis file'>
                        <SendIcon/>
                        Share This
                    </div>
                </div>
            </div>
            <div className='property-section-3'>
                <div className='property-checkboxes'>

                </div>
                <div className='description'>
                        {data.propertyDescription}
                </div>
                <div className='property-dimensions'>
                    <div className='property-dimensions-reception'>
                            Reception 
                            <div>
                            7.80m x 2.96m
                            </div>
                    </div>
                    <div className='property-dimensions-masterbedroom'>
                          Master bedroom 
                            <div>
                            7.80m x 2.96m
                            </div>
                    </div>
                    <div className='property-dimensions-bedroom'>
                          Bedroom 
                            <div>
                            7.80m x 2.96m
                            </div>
                    </div>
                    <div className='property-dimensions-kitchen'>
                          Kitchen 
                            <div>
                            7.80m x 2.96m
                            </div>
                    </div>

                </div>  
                <div className='raddaf-default-notes'>
                    <h1>IMPORTANT NOTICE FROM RADDAF HOMES</h1>
                    <p>Descriptions of the property are subjective and are used in good faith as an opinion and NOT as a statement of fact. Please make further 
                        specific enquires to ensure that our descriptions are likely to match any expectations you may have of the property. We have not tested 
                        any services, systems or appliances at this property. We strongly recommend that all the information we provide be verified by you on 
                        inspection, and by your Surveyor and Conveyancer.</p>
                </div>
            </div>

       </div> */}

<div>
            <div className='ma' style={{width:"100%"}}>
                <div className="gallery-container">
                    <div className="main-image">
                        <div className='imagmain' style={{backgroundSize:"cover",backgroundImage:`url(${selectedProperty.images[0].Value})`,width:"100%",height:"500px"}}>
                            <div className='contaier' style={{ margin: '0 40px' }}>
                                <button className='container' onClick={under}>
                                    Agreements</button>
                            </div>
                            <div className='contaier' onClick={under} style={{ margin: '0 40px' }}>
                                <button className='container'>
                                    Bills & Documents</button>
                            </div >
                            <div onClick={under} className='contaier' style={{ margin: '0 40px' }}>
                                <button className='container'>
                                    Inspection</button>
                            </div>
                            <div className='contaier' style={{ margin: '0 40px' }}>
                                <button className='container' onClick={under}>
                                   Repair Request</button>
                            </div>
                        </div>
                        <div className='iconsadd'>
                            <div>
                                <h1 style={{marginTop:"0px",fontSize:"32px",paddingBottom:"15px"}}>{selectedProperty.place}</h1>
                                <p style={{fontSize:"24px"}}>{selectedProperty.noOfBedrooms} Bedrooms Flat For Rent</p>
                            </div>
                            <div>
                               {/* room details */}
                            <div className='rooms-detai'>
                                <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {selectedProperty.noOfBedrooms}</div>
                                <div className='bathrooms'><img src={washroom} alt='washroom'/>  {selectedProperty.noOfBathrooms}</div>
                                <div className='toilets'><img src={toilet} alt='toilet'/>  {selectedProperty.noOfToilets}</div>
                                <div className='parking'><img src={parking} alt='parking'/>  {selectedProperty.parkingCapacity}</div>
                            </div>
                            <div >
                                <div style={{display:"flex",justifyContent:"flex-end",alignItems:"flex-end",flexDirection:"column"}}>
                                    <p style={{marginTop:"20px",fontSize:"24px"}}>OIRO &pound;{selectedProperty.price}</p>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        {/* property distaces */}
                        <div style={{marginTop:"20px",width:"50%"}}>
                            <div style={{display:"flex", justifyContent:"space-between",alignItems:'center',paddingTop:"15px"}}>
                                <div style={{display:"flex", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
                               <LocalHospitalIcon/>
                                Hospitals
                                </div>
                                <div style={{display:"flex",paddingLeft:"70.4%", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
                                <DirectionsIcon/>  {selectedProperty.nearby.hospital.distance}
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div style={{display:"flex", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
                                <SchoolIcon/>
                                School / Univercity
                                </div>
                                <div style={{display:"flex", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
                                <DirectionsIcon/>  {selectedProperty.nearby.school.distance}
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div style={{display:"flex", justifyContent:"center",alignItems:'center',columnGap:'1rem'}} >
                                    <DirectionsRailwayIcon/>
                                    Railway Station
                                </div>
                                <div style={{display:"flex",paddingLeft:"73%", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
                                 <DirectionsIcon/>  {selectedProperty.nearby.busStation.distance}
                                </div>
                            </div>
                           
                        </div>
                        <p style={{paddingTop:"40px"}}>{selectedProperty.propertyDescription}</p>
                        {/*property dimensions  */}
                        <div style={{marginTop:"20px",width:"50%"}}>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div>
                                Reseption
                                
                                </div>
                                <div>
                                {dimmentions[0].reseption}
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div>
                                
                                Kitchen
                                </div>
                                <div>
                                {dimmentions[0].kithcen}
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div style={{paddingRight:"41%"}} >
                                MasterBedroom
                                </div>
                                <div>
                                {dimmentions[0].masterbedroom}
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div style={{paddingRight:"50%"}}>
                                
                                Bedroom
                                </div>
                                <div>
                                
                                {dimmentions[0].bedroom}
                                </div>
                            </div>
                        </div>
                        <h1 style={{paddingTop:"10%",color:"#626262"}}>IMPORTANT NOTICE FROM RADDAF HOMES</h1>
                        <p style={{paddingTop:"20px",color:"#626262"}}>Descriptions of the property are subjective and are used in good faith as an opinion and NOT as a statement of fact. Please make further 
                            specific enquires to ensure that our descriptions are likely to match any expectations you may have of the property. We have not tested 
                            any services, systems or appliances at this property. We strongly recommend that all the information we provide be verified by you on 
                            inspection, and by your Surveyor and Conveyancer.</p>
                    </div>
                    <div className="side-images" style={{}}>
                    {selectedProperty.images.map((image, index) => (
                        <div key={index} style={{height:"165px",paddingBottom:"5px"}} className='sub-img-con-hw'>
                            <img src={image.Value} alt={`Image ${index}`} />
                        </div>
                    ))}

                        
                        <button style={{marginTop:"20px",borderRadius:"4px",paddingTop:"15px",paddingBottom:"15px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"20px"}} width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg>{selectedProperty.contactDetails.phoneNumber}
                        </button>
                        <button style={{marginTop:"20px",borderRadius:"4px",paddingTop:"15px",paddingBottom:"15px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"20px"}} width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                            </svg>Make Enquiry
                        </button>
                        <button style={{marginTop:"20px",borderRadius:"4px",paddingTop:"15px",paddingBottom:"15px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"20px"}} width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>Book Viewing
                        </button>
                        <button style={{marginTop:"20px",borderRadius:"4px",paddingTop:"15px",paddingBottom:"15px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"20px"}} width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                            </svg>Share This
                        </button>
                       
                    </div>
                </div>
                
            </div>              
        </div>
    </>
 
  )
}

export default Propertyviewpage
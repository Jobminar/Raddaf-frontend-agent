import React, { useState } from 'react';
import "./viewmore.css";
import { useNavigate } from 'react-router-dom';
import backarrow from '../Images/backarrow.png'
import { useLocation } from 'react-router-dom';
import bedroomlogo from '../Images/bedsymbol.png';
import toilet from '../Images/toilet.png';
import washroom from '../Images/washroom.png';
import parking from '../Images/car.png';
import proimg from "../Images/profile.png"
import axios from 'axios';


const Listingrequest = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const selectedProduct = location.state ? location.state.selectedProduct : null;

  console.log(selectedProduct, "show data");
  const timestamp = selectedProduct.scheduleDateTime;
  const dateOnly = timestamp ? timestamp.substring(0, 10) : null;

  // const listingId = {selectedProduct}; // Replace with your actual listingId
  const [listingIsVerified, setListingIsVerified] = useState(false);
  const handleApprove = async () => {
    // try {
    //   // Make a PATCH request to update the isVerified field
    //   // const response = await axios.patch(`/listing-property/get-listings/${selectedProduct._id}`);
    //   // console.log(response.selectedProduct._id)

    //   // // Assuming the backend responds with the updated listing data
    //   // const updatedListing = response.data;

    //   // // Update the local state or re-fetch the listing data
    //   // setListingIsVerified(updatedListing.isVerified);
    //   const response = await axios.patch(`https://raddaf-be.onrender.com/listing-property/get-listings/${selectedProduct._id}`, {
    //     isVerified: true,
    //   });

    //   // Assuming the backend responds with the updated listing data
    //   const updatedListing = response.data;

    //   // Update the local state or re-fetch the listing data
    //   setListingIsVerified(updatedListing.isVerified);
    // }
    try {
      const response = await fetch(`https://raddaf-be.onrender.com/listing-property/get-listings/${selectedProduct._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isVerified: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      // Assuming the backend responds with the updated listing data
      const updatedListing = await response.json();

      // Update the local state or re-fetch the listing data
      setListingIsVerified(updatedListing.isVerified);
    } 
    catch (error) {
      console.error('Error approving listing:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const downloadPropertyTitleDeals = () => {
    const content = selectedProduct.propertyDocuments;
    const fileName = 'propertyDocuments.txt';
    download(content, fileName);
  };

  const downloadFittingAndContentsForm = () => {
    const content = selectedProduct.fittingAndContentsForm;
    const fileName = 'fittingAndContentsForm.txt';
    download(content, fileName);
  };

  const downloadFloorplan = () => {
    const content = selectedProduct.floorplan;
    const fileName = 'floorplan.txt';
    download(content, fileName);
  };
  const downloadEnergyPerformenceCertificate = () => {
    const content = selectedProduct.energyPerformanceCertificate;
    const fileName = 'EnergyPerformenceCertificate.txt';
    download(content, fileName);
  };
  const downloadLeaseholdInformation = () => {
    const content = selectedProduct.leaseholdInformation;
    const fileName = 'leaseholdInformation.txt';
    download(content, fileName);
  };
  const downloadPropertyInfoForm = () => {
    const content = selectedProduct.propertyInfoForm;
    const fileName = 'propertyInfoForm.txt';
    download(content, fileName);
  };
  const downloadLocalAuthoritySearch = () => {
    const content = selectedProduct.localAuthoritySearch;
    const fileName = 'localAuthoritySearch.txt';
    download(content, fileName);
  };
  const downloadPropertyValuationReport = () => {
    const content = selectedProduct.propertyValuationReport;
    const fileName = 'propertyValuationReport.txt';
    download(content, fileName);
  };

  const download = (content, fileName) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const [selectedOptiona, setSelectedOptiona] = useState(null);

  const options = [
    "For Sale",
    "To-Let"
  ];

  const handleSelect = (optionb) => {
    setSelectedOptiona(optionb);
  };
  const [selectedOptionb, setSelectedOptionb] = useState(null);

  const optionb = [
    "1",
    "1.5",
    "2",
    "2.5",
    "3"
  ];

  const handleSelectb = (option) => {
    setSelectedOptionb(option);
  };

  

  return (
    <div className='main'>
      <div className='list-head'>
        <img alt='back-arrow' src={backarrow} onClick={()=>{navigate('/')}} />
        <h1>{selectedProduct.purpose}</h1>
      </div>
      <div style={{display:"flex"}}>
        
        <div style={{marginRight:"3%",width:"30%",textAlign:"center"}}>
          
          <img style={{width:"80%"}} src={proimg} alt='userimage'/>
                    <div style={{textAlign:"start",marginLeft:"40px"}}>
                        <p style={{fontSize:"18px"}}>Name <span style={{paddingLeft:"70px"}}>:</span> <span style={{paddingLeft:"10px"}}>{selectedProduct.contactDetails.fullname}</span></p>
                        <p style={{fontSize:"18px"}}>Address <span style={{paddingLeft:"50px"}}>:</span> <span style={{paddingLeft:"10px"}}>{selectedProduct.place}</span></p>
                        <p style={{fontSize:"18px"}}>Features <span style={{paddingLeft:"45px"}}>:</span> <span style={{paddingLeft:"10px"}}>{selectedProduct.propertyType}</span></p>
                        <p style={{fontSize:"18px"}}>Postcode <span style={{paddingLeft:"40px"}}>:</span> <span style={{paddingLeft:"10px"}}>{selectedProduct.pinCode}</span></p>
                        <h4>Contact Details</h4>
                        <p style={{fontSize:"18px"}}>Phone <span style={{paddingLeft:"60px"}}>:</span> <span style={{paddingLeft:"10px"}}>{selectedProduct.contactDetails.phoneNumber}</span></p>
                        <p style={{fontSize:"18px"}}>Postcode <span style={{paddingLeft:"35px"}}>:</span> <span style={{paddingLeft:"10px"}}>{selectedProduct.contactDetails.email}</span></p>
                        {/* <p style={{fontSize:"18px"}}>Asking Price <span style={{paddingLeft:"0px"}}>:</span> <span style={{paddingLeft:"10px"}}>{selectedProduct.price}</span></p><br/> */}
          {/* <div style={{display:'flex',marginTop:"10%"}}>
            <div>Name </div>
            <div style={{paddingLeft:"35px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.contactDetails.fullname}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Address </div>
            <div style={{paddingLeft:"20px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.place}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Pincode </div>
            <div style={{paddingLeft:"20px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.place}</div>
          </div>
          
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Phone No </div>
            <div style={{paddingLeft:"5px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.contactDetails.phoneNumber}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Emain </div>
            <div style={{paddingLeft:"30px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.contactDetails.email}</div>
          </div> */}
                    </div>
        </div>
        <hr style={{ borderColor: "#955108",borderStyle:"solid",backgroundColor:"#955108", width: "1px" }}/>
        

      <div className='cont3'>
                    <h1 style={{fontSize:"18px"}}> Property Information</h1>
                    <p style={{fontSize:"18px"}}> Property Photos</p>
                    <div style={{display:'flex',width:"100%"}}>
                        <div style={{marginRight:"3%"}}>
                            <img style={{width:"180px",height:"120px",marginRight:"10%"}} src="https://property-docs-images.s3.ap-southeast-1.amazonaws.com/d32c47e5-f906-413f-a4fe-36dbbebc54da/Images/House22.jpg"/>
                        </div>
                        <div style={{marginRight:"3%"}}>
                            <img style={{width:"180px",height:"120px"}}  src="https://property-docs-images.s3.ap-southeast-1.amazonaws.com/977305c0-bd24-411b-a094-dbf48716769b/Images/House32.jpg"/>
                        </div>
                        <div style={{marginRight:"3%"}}>
                            <img style={{width:"180px",height:"120px"}}  src="https://property-docs-images.s3.ap-southeast-1.amazonaws.com/977305c0-bd24-411b-a094-dbf48716769b/Images/House31.jpg"/>
                        </div>
                    </div>
                    <div className='cont4'>
                        <p style={{fontSize:"18px"}}>Property Type <span style={{paddingLeft:"100px"}}>:</span> <span style={{paddingLeft:"100px"}}>{selectedProduct.propertyType}</span></p><br/>
                        <p style={{fontSize:"18px"}}>Property Address <span style={{paddingLeft:"70px"}}>:</span> <span style={{paddingLeft:"100px"}}>{selectedProduct.place}</span></p><br/>
                        <p style={{fontSize:"18px"}}>Features <span style={{paddingLeft:"140px"}}>:</span> <span style={{paddingLeft:"100px"}}>{selectedProduct.propertyType}</span></p><br/>
                        <p style={{fontSize:"18px"}}>Postcode <span style={{paddingLeft:"135px"}}>:</span> <span style={{paddingLeft:"100px"}}>{selectedProduct.pinCode}</span></p><br/>
                        <p style={{fontSize:"18px"}}>Asking Price <span style={{paddingLeft:"110px"}}>:</span> <span style={{paddingLeft:"100px"}}>{selectedProduct.price}</span></p><br/>
                        
                        {/* <div className='contche' onClick={downloadPropertyTitleDeals}>
                            
                            <div className='doc'>
                                <p>Property title deals</p>
                            </div>
                           
                        </div>
                        <div className='contche' onClick={downloadFittingAndContentsForm}>
                            
                            <div className='doc'>
                                <p>Fitting and contents form(TA10)</p>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadEnergyPerformenceCertificate} >
                            
                            <div className='doc'>
                                <p>Energy Performence Certificate(EPC)</p>
                            </div>
                            
                        </div>
                        <div className='contche'onClick={downloadLeaseholdInformation} >
                            
                            <div className='doc'>
                                <p>Leasehold Information(If applicable)</p>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadPropertyInfoForm}>
                            
                            <div className='doc'>
                                <p>Property Info Form(TA6)</p>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadLocalAuthoritySearch} >
                            
                            <div className='doc'>
                                <p>Local Authority Search</p>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadPropertyValuationReport} >
                            
                            <div className='doc'>
                                <p>Property Valuation Report</p>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadFloorplan}>
                            
                            <div className='doc'>
                                <p>Floor Plan</p>
                            </div>
                            
                        </div> */}
                        <div className=''>
                          <h1 style={{fontSize:"24px"}}>
                            Property Descrition:
                          </h1>
                          <p className='bpara'>{selectedProduct.propertyDescription}</p>
                        </div>
                          <div className='rooms-info' style={{paddingTop:"20px",paddingLeft:"10px"}}>
                          </div>
                          <div style={{marginBottom:"20px",marginTop:"10px"}} className='rooms-detai'>
                <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {selectedProduct.noOfBedrooms}</div>
                <div className='bahrooms'><img src={washroom} alt='washroom'/>  {selectedProduct.noOfBathrooms}</div>
                <div className='toilets'><img src={toilet} alt='toilet'/>  {selectedProduct.noOfToilets}</div>
                <div className='parking'><img src={parking} alt='parking'/>  {selectedProduct.parkingCapacity}</div>
              </div><br/>
              <h1 style={{padding:"25px 0px 15px",fontSize:"24px"}}>Property Docuemnts</h1><br/>
              <div className='contche' onClick={downloadPropertyTitleDeals}>
                            
                            <div className='doc'>
                                <p>Property title deals</p>
                            </div>
                           
                        </div>
                        <div className='contche' onClick={downloadFittingAndContentsForm}>
                            
                            <div className='doc'>
                                <p>Fitting and contents form(TA10)</p>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadEnergyPerformenceCertificate} >
                            
                            <div className='doc'>
                                <p>Energy Performence Certificate(EPC)</p>
                            </div>
                            
                        </div>
                        <div className='contche'onClick={downloadLeaseholdInformation} >
                            
                            <div className='doc'>
                                <p>Leasehold Information(If applicable)</p>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadPropertyInfoForm}>
                            
                            <div className='doc'>
                                <p>Property Info Form(TA6)</p>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadLocalAuthoritySearch} >
                            
                            <div className='doc'>
                                <p>Local Authority Search</p>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadPropertyValuationReport} >
                            
                            <div className='doc'>
                                <p>Property Valuation Report</p>
                            </div>
                            
                        </div>
                        <div className='contche'  onClick={downloadFloorplan}>
                            
                            <div className='doc'>
                                <p>Floor Plan</p>
                            </div>
                            
                        </div>
                          
                    </div>
                          <div style={{display:"flex",marginTop:"40px"}}>
                            <div style={{marginRight:"40px"}}><h3>Any Special condition :</h3></div>
                            <div style={{backgroundColor:"#FFECDE", padding:"10px"}}><p>{selectedProduct.specialConditions} </p></div>
                          </div>
                          <div style={{display:"flex",marginTop:"20px"}}>
                                <div style={{marginRight:"40px"}}><h3>Property Viewing Schedule :</h3></div>
                                    <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{marginRight:"30px",marginTop:"20px"}} fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                        </svg>
                                      </div>
                            <div style={{backgroundColor:"#FFECDE", padding:"10px"}}><p>{dateOnly}</p></div>
                          </div>
                          
                          {/* <button onClick={handleApprove} style={{width:"10%",height:"7%",backgroundColor:"#9E5C08",borderRadius:"10px",fontSize:"100%",fontWeight:"bold",marginBottom:"20px",border:"none",color:"white",marginRight:"10px"}}>Approve</button>
                          <button style={{width:"10%",height:"7%",backgroundColor:"white",borderRadius:"10px",fontSize:"100%",fontWeight:"bold",marginBottom:"20px",borderColor:"#9E5C08",borderStyle:"solid",color:"#9E5C08",marginRight:"10px"}}>Decline</button> */}
                          <div style={{marginTop:"10%"}}>
                            <h3>Solicitor's Details</h3>
                            <div style={{display:"flex"}}>
                                <div style={{width:"30%"}}>
                                    <img style={{width:"100%",height:"100%"}} src={proimg} alt='userimage'/>
                                </div>
                                <div style={{textAlign:"start",marginLeft:"40px"}}>
                        <p style={{fontSize:"18px"}}>Name <span style={{paddingLeft:"70px"}}>:</span> <span style={{paddingLeft:""}}>{selectedProduct.contactDetails.fullname}</span></p>
                        <p style={{fontSize:"18px"}}>Address <span style={{paddingLeft:"50px"}}>:</span> <span style={{paddingLeft:"0px"}}>{selectedProduct.place}</span></p>
                        <p style={{fontSize:"18px"}}>Features <span style={{paddingLeft:"45px"}}>:</span> <span style={{paddingLeft:"10px"}}>{selectedProduct.propertyType}</span></p>
                        <p style={{fontSize:"18px"}}>Postcode <span style={{paddingLeft:"40px"}}>:</span> <span style={{paddingLeft:"10px"}}>{selectedProduct.pinCode}</span></p>
                        <h4>Contact Details</h4>
                        <p style={{fontSize:"18px"}}>Phone <span style={{paddingLeft:"60px"}}>:</span> <span style={{paddingLeft:"10px"}}>{selectedProduct.contactDetails.phoneNumber}</span></p>
                        <p style={{fontSize:"18px"}}>Postcode <span style={{paddingLeft:"35px"}}>:</span> <span style={{paddingLeft:"10px"}}>{selectedProduct.contactDetails.email}</span></p>
                        {/* <p style={{fontSize:"18px"}}>Asking Price <span style={{paddingLeft:"0px"}}>:</span> <span style={{paddingLeft:"10px"}}>{selectedProduct.price}</span></p><br/> */}
          {/* <div style={{display:'flex',marginTop:"10%"}}>
            <div>Name </div>
            <div style={{paddingLeft:"35px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.contactDetails.fullname}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Address </div>
            <div style={{paddingLeft:"20px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.place}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Pincode </div>
            <div style={{paddingLeft:"20px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.place}</div>
          </div>
          
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Phone No </div>
            <div style={{paddingLeft:"5px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.contactDetails.phoneNumber}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Emain </div>
            <div style={{paddingLeft:"30px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.contactDetails.email}</div>
          </div> */}
                    </div>
                            </div>
                          </div>
                    </div>                    
      </div>
    </div>
  );
}

export default Listingrequest;

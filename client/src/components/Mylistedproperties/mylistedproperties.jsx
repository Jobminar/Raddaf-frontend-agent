import React from 'react'
import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backarrow from '../Images/backarrow.png'
import '../Myrental/myrentalrequests.css'
import axios from 'axios';

// mui imports
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// images
import bedroomlogo from '../Images/bedsymbol.png';
import toilet from '../Images/toilet-logo.png';
import washroom from '../Images/washroom.png';
import parking from '../Images/car.png';

const Mylistedproperties = () => {
    const navigate = useNavigate()
    // tolet 0r forsale
    const [selectedValue, setSelectedValue] = useState('Tolet'); 

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    
    };
    // fetching

    const [toletListings, setToletListings] = useState([]);
    const fetchrentals = async () => {
      try {
        const url = 'https://raddaf-be.onrender.com/listing-property/get-listings';
        const response = await axios.get(url);
        const { data } = response;
        // const filteredToletListings = data.filter(data => data.purpose === 'Tolet');
        console.log(data);
        setToletListings(data); 
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    useEffect(() => {
      fetchrentals();
    }, []);


    // images switch
    const [mainImage, setMainImage] = useState('');

    const clicktop = (imageSrc) => {
      setMainImage(imageSrc);
    };
 const [selectedproperty,setselectedproperty]=useState([])
 
    // send data
    const handleproperty = (item) => {
      setselectedproperty(item);
      navigate('/propertyviewpage', { state: { selectedproperty: item } });
      console.log(item,'data')
    };
  

  return (
    <>

    <div className='myrentalrequests-con'>
        <div className='head-main'>
            <img src={backarrow} alt='backarrow' onClick={()=>{navigate('/')}}/>
            <h1>My Listed properties</h1>
            <div>
                <FormControl className='head-dropdown'
                 sx={{ m: 1, minWidth: 120 }}
                 style={{
                   color: 'white',
                   border: 'none', 
                   fontSize:'30'
                 }}
                >
                <Select
                    value={selectedValue} 
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                    style={{
                        color: 'white',
                        border: 'none', 
                        fontSize:'30px'
                      }}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            color: 'white',
                            backgroundColor: '#955108' // Background color of the dropdown
                          },
                        },
                      }}
                >
                    <MenuItem value={'Tolet'}>Tolet</MenuItem>
                    <MenuItem value={'Forsale'}>Forsale</MenuItem>
                
                </Select>
                </FormControl>
            </div>
        </div>
        
        {toletListings.map((listing) => (
            <div className='myrental-main'>
                <div className='myrental-images'>
                    <div className='main-img' onClick={()=>{handleproperty(listing)}}>
                            {mainImage ? (
                            <img src={mainImage} alt="Main" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                            ) : (
                                listing.images.length > 0 && <img src={listing.images[0].Value} alt="First" />
                            )}
                        
                    </div>
                    <div className='sub-img'>
                            {listing.images.map((image, index) => (
                                <div key={index} onClick={() => clicktop(image.Value)} className='sub-img-con-rental'>
                                <img src={image.Value} alt={`Image ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                                </div>
                            ))}
                    </div>
                </div>
                <div className='myrental-desc'>
                        <div className='price'><span>&#163; </span><span>299 PCM</span><span> (&#163;  190 pw)</span></div>
                        <div className='apartment'>{listing.noOfBedrooms} bedroom apartment to rent</div>
                        <div className='address'>{listing.place}</div>
                        <div className='rooms-details'>
                            <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {listing.noOfBedrooms}</div>
                            <div className='bathrooms'><img src={washroom} alt='washroom'/>  {listing.noOfBathrooms}</div>
                            <div className='toilets'><img src={toilet} alt='toilet'/>  {listing.noOfToilets}</div>
                            <div className='parking'><img src={parking} alt='parking'/>  {listing.parkingCapacity}</div>
                        </div>
                </div>
            </div>
         ))}
                  
    </div>
    </>
  )
}

export default Mylistedproperties
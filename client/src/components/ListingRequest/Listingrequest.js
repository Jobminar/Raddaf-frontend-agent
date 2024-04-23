// import React, { useEffect, useState } from 'react';
// import backarrow from '../Images/backarrow.png';
// import {  useNavigate } from 'react-router-dom';


// import axios from 'axios';
// import "./Listingrequest.css"

// const Valuationrequest = () => {
//   const navigate = useNavigate();
//   const [selectedProduct, setSelectedProduct] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("To-Let");

//   const [listingData, setListingData] = useState([]);

  

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://raddaf-be.onrender.com/listing-property/get-listings');
//         const { data } = response;

//         let filteredListings = [];
//         if (selectedOption === "For Sale") {
//           filteredListings = data.filter(item => item.purpose === 'Sale');
//         } else if (selectedOption === "To-Let") {
//           filteredListings = data.filter(item => item.purpose === 'Tolet');
//         }

//         setListingData(filteredListings);
//         console.log(filteredListings)

//         // setListingData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleProduct = (item) => {
//     setSelectedProduct(item);
//     navigate('/viewdocuments', { state: { selectedProduct: item } });
//     console.log(item,'data')
//   };

//   const handleSelect = (optionb) => {
//     setSelectedOptiona(optionb);
//   };

//   const [selectedOptiona, setSelectedOptiona] = useState(null);

//   const options = [
//     "For Sale",
//     "To-Let"
//   ];


//   const renderListings = () => {
//     return listingData.map((data) => {
//       const timestamp = data.scheduleDateTime;
//       const dateOnly = timestamp ? timestamp.substring(0, 10) : null;
//     return  (
//       <div key={data.id}>
//         <div style={{ margin: '50px' }}>
//           <p style={{ margin: '20px' }}>{dateOnly}</p>
//           <div className='hhh' style={{ display: 'flex', overflow:"auto" }}>
//             <div
//               style={{
//                 backgroundColor: '#FFD2B1',
//                 borderStyle: 'solid',
//                 borderColor: '#955108',
//                 borderTop: 'none',
//                 borderWidth: '6px',
//                 borderBottom: 'none',
//                 borderRight: 'none',
//                 padding: '20px',
//                 marginLeft: '20px',
//                 width: '100%',
//               }}
//             >
//               <table>
//                             <thead style={{marginBottom:"px"}}>
//                                 <tr style={{borderBottom:"0.1%",borderColor:"#955108",borderStyle:"groove",borderTop:"none",borderLeft:"none",borderRight:"none"}}>
//                                     <th>Name</th>
//                                     <th>Address</th>
//                                     <th>Pin code</th>
//                                     <th>contact Details</th>
//                                     <th>View Docuemnts</th>
//                                 </tr>
                            
//                             </thead>
//                             <tbody>
//                                 <tr class="hove">
//                                     <td>{data.contactDetails.name}</td>
//                                     <td>{data.place}</td>
//                                     <td>{data.place}</td>
//                                     <td>{data.contactDetails.phoneNumber}<br/>{data.contactDetails.email}</td>
//                                     <td>
//                                         <div style={{textAlign:"center"}} className='nn'>
//                                             <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleProduct(data)} width="40" style={{paddingRight:"60px"}} height="40" fill="#955108" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
//                                                 <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
//                                             </svg>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
            
            
//                </div>
            
//           </div>
//         </div>
//       </div>
//     )
//     });
//   };

//   return (
//     <div>
//       <div className='list-hea'>
//         <img src={backarrow} alt='back-arrow' onClick={() => navigate('/')} />
//         <h1>Listing Request</h1>
//         <div>
//             <select
//         value={selectedOptiona}
//         onChange={(e) => handleSelect(e.target.value)} style={{background:"#BE6B2E",color:"white",borderRadius:"10px",border:"none",width:"100%",padding:"20px",fontSize:"18px"}}>
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//             </select>
//         </div>
//       </div>
//       <div>{renderListings()}</div>
//     </div>
//   );
// };

// export default Valuationrequest;

import React, { useEffect, useState } from 'react';
import backarrow from '../Images/backarrow.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Listingrequest.css"

const Listingrequest = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedOption, setSelectedOption] = useState("To-Let");
  const [listingData, setListingData] = useState([]);
  // const [selectedOptiona, setSelectedOptiona] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raddaf-be.onrender.com/listing-property/get-listings');
        const { data } = response;

        let filteredListings = [];
        if (selectedOption === "For Sale") {
          filteredListings = data.filter(item => item.purpose === 'Sale');
        } else if (selectedOption === "To-Let") {
          filteredListings = data.filter(item => item.purpose === 'Tolet');
        }

        setListingData(filteredListings);
        console.log(filteredListings)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedOption]);

  const handleProduct = (item) => {
    setSelectedProduct(item);
    navigate('/viewdocuments', { state: { selectedProduct: item } });
  };

  const handleSelect = (option) => {
    // setSelectedOptiona(option);
    setSelectedOption(option);
  };

  const options = [
    "For Sale",
    "To-Let"
  ];

  const renderListings = () => {
    return listingData.map((data) => {
      const timestamp = data.scheduleDateTime;
      const dateOnly = timestamp ? timestamp.substring(0, 10) : null;

      return (
        <div key={data.id}>
          <div style={{ margin: '50px' }}>
            <p style={{ margin: '20px' }}>{dateOnly}</p>
            <div className='hhh' style={{ display: 'flex', overflow:"auto" }}>
              <div
                style={{
                  backgroundColor: '#FFD2B1',
                  borderStyle: 'solid',
                  borderColor: '#955108',
                  borderTop: 'none',
                  borderWidth: '6px',
                  borderBottom: 'none',
                  borderRight: 'none',
                  padding: '20px',
                  marginLeft: '20px',
                  width: '100%',
                }}
              >
                <table>
                  <thead style={{marginBottom:"px"}}>
                    <tr style={{borderBottom:"0.1px",borderColor:"#955108",borderStyle:"groove",borderTop:"none",borderLeft:"none",borderRight:"none"}}>
                      <th style={{textAlign:"center"}}>Name</th>
                      <th style={{textAlign:"center"}}>Address</th>
                      <th style={{textAlign:"center"}}>Pin code</th>
                      <th style={{textAlign:"center"}}>contact Details</th>
                      <th style={{textAlign:"center"}}>View More</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hove">
                      <td style={{textAlign:"center"}}>{data.contactDetails.fullname}</td>
                      <td style={{textAlign:"center"}}>{data.place}</td>
                      <td style={{textAlign:"center"}}>{data.place}</td>
                      <td style={{textAlign:"center"}}>{data.contactDetails.phoneNumber}<br/>{data.contactDetails.email}</td>
                      <td style={{textAlign:"center"}}>
                        <div style={{textAlign:"center"}} className='nn'>
                          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleProduct(data)} width="40"  height="40" fill="#955108" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )
    });
  };

  return (
    <div>
      <div className='list-hea'>
        <img src={backarrow} alt='back-arrow' onClick={() => navigate('/')} />
        <h1>Listing Request</h1>
        <div>
          <select
            value={selectedOption}
            onChange={(e) => handleSelect(e.target.value)} style={{background:"#BE6B2E",color:"white",borderRadius:"10px",border:"none",width:"100%",padding:"20px",fontSize:"18px"}}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>{renderListings()}</div>
    </div>
  );
};

export default Listingrequest;

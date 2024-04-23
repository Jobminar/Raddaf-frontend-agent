import React, { useEffect, useState } from "react";
import "./myclients.css";
import logo from "./arrow.jpg";
import { clients } from "../MyClinets/Data";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Card, Table } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Myclients = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedOption, setSelectedOption] = useState("To-Let");
  const [listingData, setListingData] = useState([]);

  const navigate=useNavigate()
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
      };
      const handleProduct = (item) => {
        setSelectedProduct(item);
        navigate('/viewmore', { state: { selectedProduct: item } });
      };

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

  return (
    <div className="main-div-clients">
      <div className="first-div-clients">
        <div className="arrow-div">
          <div>
            <img src={logo} alt="logo"  onClick={()=>navigate("/")}/>
          </div>
          <Box sx={{ color: "#955108" }}>My clients</Box>
         <FormControl
            sx={{
              m: 1,
               minWidth: 280,
              backgroundColor: "#9E5C08",
              borderRadius: "40px",
              border:"none",
              boxShadow: "none",
              height: "auto",
            }}
          >
            <InputLabel
              id="demo-simple-select-autowidth-label"
              sx={{ display: "none" }}
            >
              Sale
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              displayEmpty
              renderValue={(value) => (value ? value : "For Sale")}
              sx={{
                border: "#BE6B2E",
                background: "#BE6B2E",
                color: "white",
                fontFamily: "bold",
              }}
            >
              <MenuItem value={10}>Agent</MenuItem>
              <MenuItem value={21}>Agent</MenuItem>
              <MenuItem value={22}>Agent</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="second-div-clients">
        {listingData.map((data, index) => (
          <Card key={index} sx={{ background: "#FFD2B1" }} className="card-div">
            <Table className="table-div">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Contact Details</th>
                  <th>Property Address</th>
                  <th>ID</th>
                  <th>View More</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.contactDetails.fullname}</td>
                  <td>
                    Phone: {data.contactDetails.phoneNumber}, <br />Mail:{" "}
                    {data.contactDetails.email}
                  </td>
                  <td>{data.place}</td>
                  <td>{data.ID}</td>
                  <td > <ArrowForwardIcon onClick={() => handleProduct(data)} sx={{color:"#955108",background:"#FFD2B1"}}/></td>
                </tr>
              </tbody>
            </Table>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Myclients;

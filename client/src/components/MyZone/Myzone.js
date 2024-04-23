import React from "react";
import '../MyZone/myzone.css'
import logo1 from '../MyZone/arrow.jpg'
import { clients } from '../MyZone/Data'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Card, Table } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
const Myzone = () => {

  const navigate=useNavigate()
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
      };
  return (
    <div className="main-div-zone">
      <div className="first-div-zone">
        <div className="arrow-div1">
          <div>
            <img src={logo1} alt="logo" onClick={()=>navigate("/")}/>
          </div>
          <Box sx={{ color: "#955108" }}>My Zone</Box>

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
              renderValue={(value) => (value ? value : "Letted Property")}
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
      <Box sx={{color:"#9E5C08",marginLeft:"10%",fontWeight:'10px'}}>East Zone</Box>
      <div className="second-div-zone">
        
        {clients.map((client, index) => (
          <Card key={index} sx={{ background: "#FFD2B1" }} className="card-div1">
            <Table className="table-div1">
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
                  <td>{client.name}</td>
                  <td>
                    Phone: {client.contactdetails.phone}, <br />Mail:{" "}
                    {client.contactdetails.Mail}
                  </td>
                  <td>{client.propertyaddress}</td>
                  <td>{client.ID}</td>
                  <td ><ArrowForwardIcon onClick={()=>{navigate('/underconstruction')}} sx={{color:"#955108",background:"#FFD2B1"}}/></td>
                </tr>
              </tbody>
            </Table>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Myzone;

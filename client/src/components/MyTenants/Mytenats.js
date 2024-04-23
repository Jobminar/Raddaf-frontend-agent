import React from "react";
import '../MyTenants/mytenats.css'
import logo2 from '../MyTenants/arrow.jpg'
import { clients } from '../MyTenants/Data'
import { Box, Card, Table } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
const Mytenats = () => {
  const navigate=useNavigate()
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
      };
  return (
    <div className="main-div-tenats">
      <div className="first-div-tenats">
        <div className="arrow-div2">
          <div>
            <img src={logo2} alt="logo" onClick={()=>navigate("/")} />
          </div>
          <h2 style={{ color: "#955108" }}>My tenats</h2>
       
        </div>
      </div>
      <div className="second-div-tenats">
        {clients.map((client, index) => (
          <Card key={index} sx={{ background: "#FFD2B1" }} className="card-tenats">
            <Table className="table-div2">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Photo</th>
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
                  <td><img src={client.img} alt="boy" /></td>

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

export default Mytenats;

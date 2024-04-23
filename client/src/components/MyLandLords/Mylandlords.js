import React from "react";
import '../MyLandLords/mylandlords.css'
import logo from "./arrow.jpg";
import { clients } from "../MyClinets/Data";
import {  Card, Table } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const Mylandlords = () => {
  const navigate=useNavigate()
  return (
    <div className="main-div-lords">
      <div className="first-div-lords">
        <div className="arrow-div3">
          <div>
            <img src={logo} alt="logo" onClick={()=>navigate("/")}/>
          </div>
          <h2 style={{ color: "#955108" }}>My Landlords</h2>
        
        </div>
      </div>
      <div className="second-div-lords">
        {clients.map((client, index) => (
          <Card key={index} sx={{ background: "#FFD2B1" }} className="card-div3">
            <Table className="table-div3">
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

export default Mylandlords;

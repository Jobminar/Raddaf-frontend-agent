import "./Home.css";
import { useNavigate } from "react-router-dom";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LandscapeOutlinedIcon from "@mui/icons-material/LandscapeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import OfflinePinOutlinedIcon from "@mui/icons-material/OfflinePinOutlined";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import { Card, IconButton, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Data } from "../../Total";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Homeagent = () => {
  const navigate = useNavigate();
  const myclientscount = 2;
  const myzonecount = 10;
  const myappointmentcount = 3;
  const mylandlordscount = 5;
  const mytenantscount = 20;
  const mypotentialclientscount = 30;
  const Valuationrequestclient = 10;
  const Listingrequestclient = 7;
  const Agreementscount = 34;

  const {admin}=useContext(Data)
  const [showMap, setShowMap] = useState({});
  
  const handleIconClick = (id) => {
    
    setShowMap((prevShowMap) => ({
      ...prevShowMap,
      [id]: !prevShowMap[id],
    }));
  };

  return (
    <>
      <div className="home-con">
        <div className="main-con">
          <div className="my-links">
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <Person2OutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/myclients");
                }}
              >
                <h1>My Clients</h1>
                <p>{myclientscount}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <LocationOnOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/myzone");
                }}
              >
                <h1>My Zone</h1>
                <p>{myzonecount}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <CalendarMonthOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/underconstruction");
                }}
              >
                <h1>My Appointments</h1>
                <p>{myappointmentcount}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <LandscapeOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/mylandlords");
                }}
              >
                <h1>My Landlords</h1>
                <p>{mylandlordscount}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <PeopleOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/mytenats");
                }}
              >
                <h1>My Tenants</h1>
                <p>{mytenantscount}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <Diversity1OutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/underconstruction");
                }}
              >
                <h1>My Potential clients</h1>
                <p>{mypotentialclientscount}</p>
              </div>
            </div>
          </div>
          <div className="my-own">
            <p
              onClick={() => {
                navigate("/myrentalrequests");
              }}
            >
              My Rental Request
            </p>
            <p
              onClick={() => {
                navigate("/listaproperty");
              }}
            >
              List a Properties
            </p>
            <p
              onClick={() => {
                navigate("/mylistedproperties");
              }}
            >
              My Listed Properties
            </p>
            <p
              onClick={() => {
                navigate("/valuationrequest");
              }}
            >
              My Valuation Request
            </p>
          </div>
          <div className="my-links">
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <OfflinePinOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/underconstruction");
                }}
              >
                <h1>Generate Billing</h1>
                <p>{Valuationrequestclient}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <ChecklistRtlOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>

              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/listingrequest");
                }}
              >
                <h1>My Listing Request</h1>
                <p>{Listingrequestclient}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <ClassOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/underconstruction");
                }}
              >
                <h1>My Agreements</h1>
                <p>{Agreementscount}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="message-con">

      
        <Card sx={{ display: "flex", flexDirection: "column", gap: "3px", background: "#FEFCF8", borderRadius: "10px" }}>
            <h2 style={{ color: "#955108", textAlign: "center" }}>Messages</h2>
            {admin.map((adminData) => (
              <div className="admin-map" key={adminData._id}>
                <div style={{ color: "#955108" }}>{adminData.username}</div>
                <div style={{ color: "#955108" }}> {adminData.email}</div>

                <div>
                  {showMap[adminData._id] ? (
                    <TextField label="Message" />
                  ) : (
                    <>
                      <IconButton onClick={() => handleIconClick(adminData._id)}>
                        <MailOutlineIcon />
                      </IconButton>
                    </>
                  )}
                </div>

               
              </div>
            ))}
          </Card>
    </div>
        
      </div>
    </>
  );
};
export default Homeagent;

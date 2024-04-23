// import upload from '../Images/upload-image.jpeg'
import backarrow from "../Images/backarrow.png";
import { useContext, useState } from "react";
import "./Lista-property.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// mui

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// rooms have added
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import toiletlogo from "../Images/toilet-logo.png";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import uploadimage from "../Images/uploadimagesmall.png";
import Imageupload from "../Imageupload/Imageupload";

const Listaproperty = () => {

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('To-let');
  const[selectedepcvalue,setselectedepcvalue]=useState('EPC-VALUE')
  const [formValues, setFormValues] = useState({
    images:[],
    propertyDescription: "",
    propertytype: "",
    selectsaleorrent: "",
    receptionlength: "",
    receptionwidth: "",
    kitchenlength: "",
    kitchenwidth: "",
    masterBedroomlength: "",
    masterBedroomwidth: "",
    bedroomlength: "",
    bedroomwidth: "",
    numberOfRooms: "",
    numberOfBathrooms: "",
    numberOfToilets: "",
    numberOfParkingSpaces: "",
    hospitalDistance: "",
    hospitalName: "",
    schoolDistance: "",
    schoolName: "",
    busStationDistance: "",
    busStationName: "",
    propertyscheduling: null,
    contactDetails: {
      fullname: "",
      email: "",
      mobileNumber: "",
      subject: "",
    },
    propertyTitleDeals: null,
    fittingsContentForm: null,
    EPC: null,
    Leasehold: null,
    TA6: null,
    LocalAuthoritySearch: null,
    PropertyValuationReport: null,
    FloorPlan: null,
    place:'',
    price:'',
    pinCode:'',
    epcvalue:'',
    streetParking: false,
    rearGarden: false,
    gasCentralHeating: false,
    doubleGlazedWindows: false,

  });
  

  const handleInputChange = (e) => {
    const { name, value ,checked, type} = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "selectsaleorrent") {
      setSelectedOption(value);
    }
  };



  const handleContactDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      contactDetails: {
        ...prevState.contactDetails,
        [name]: value,
      },
    }));
  };

  const handleDateChange = (newValue) => {
    setFormValues((prevState) => ({
      ...prevState,
      propertyscheduling: newValue,
    }));
  };

  const handleInputFilter = (e) => {
    const { name, value, type, checked } = e.target;

    // For radio inputs, handle checked state to capture the value
    const inputValue = type === "radio" ? (checked ? value : "") : value;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Basic form fields
    formData.append("purpose", formValues.selectsaleorrent);
    formData.append("propertyType", formValues.propertytype);

    // Images
    // formData.append("images", imageURL); // Assuming you have an input for image URL
    for (let i = 0; i < formValues.images.length; i++) {
      formData.append("images", formValues.images[i]);
    }
    // Property documents
    formData.append(
      "propertyDocuments",
      JSON.stringify(formValues.propertyTitleDeals)
    );

    // Other document types (if needed)
    formData.append("fittingAndContentsForm", formValues.fittingsContentForm);
    formData.append("energyPerformanceCertificate", formValues.EPC);
    formData.append(
      "leaseholdInformation",
      JSON.stringify(formValues.Leasehold)
    );
    formData.append("propertyInfoForm", formValues.TA6);
    formData.append("localAuthoritySearch", formValues.LocalAuthoritySearch);
    formData.append(
      "propertyValuationReport",
      JSON.stringify(formValues.PropertyValuationReport)
    );
    formData.append("floorplan", formValues.FloorPlan);

    // Property description
    formData.append("propertyDescription", formValues.propertyDescription);

    // Numeric fields (convert to number)
    formData.append("receptionlength", parseFloat(formValues.receptionlength));
    formData.append("receptionwidth", parseFloat(formValues.receptionwidth));
    formData.append("kitchenlength", parseFloat(formValues.kitchenlength));
    formData.append("kitchenwidth", parseFloat(formValues.kitchenwidth));
    formData.append(
      "masterBedroomlength",
      parseFloat(formValues.masterBedroomlength)
    );
    formData.append(
      "masterBedroomwidth",
      parseFloat(formValues.masterBedroomwidth)
    );
    formData.append(
      "bedroomlength",
       parseFloat(formValues.bedroomlength)
       );
    formData.append(
      "bedroomwidth", 
      parseFloat(formValues.bedroomwidth)
      );
    formData.append(
      "noOfBedrooms", 
      parseInt(formValues.numberOfRooms, 10)
      );
    formData.append(
      "noOfBathrooms",
      parseInt(formValues.numberOfBathrooms, 10)
    );
    formData.append(
      "noOfToilets", 
      parseInt(formValues.numberOfToilets, 10)
      );
    formData.append(
      "parkingCapacity",
      parseInt(formValues.numberOfParkingSpaces, 10)
    );

    // Contact details
    formData.append(
      "contactDetails.name", 
      formValues.contactDetails.fullname
      );
    formData.append(
      "contactDetails.email",
       formValues.contactDetails.email
       );
    formData.append(
      "contactDetails.mobileNumber",
      formValues.contactDetails.mobileNumber
    );
    formData.append(
      "contactDetails.subject",
      formValues.contactDetails.subject
    );
    // place & price & pincode & epc value
    formData.append(
      "place",
      formValues.place
    );
    formData.append(
      "price",
      formValues.price
    );
    formData.append(
      "pinCode",
      formValues.pinCode
    );
    formData.append(
      "epcvalue",
      formValues.epcvalue
    );

    // Nearby details
    formData.append(
      "nearby.hospital.distance",
      parseFloat(formValues.hospitalDistance)
    );
    formData.append(
      "nearby.hospital.name", 
      formValues.hospitalName
      );
    formData.append(
      "nearby.school.distance",
      parseFloat(formValues.schoolDistance)
    );
    formData.append(
      "nearby.school.name", 
      formValues.schoolName
      );
    formData.append(
      "nearby.busStation.distance",
      parseFloat(formValues.busStationDistance)
    );
    formData.append(
      "nearby.busStation.name",
       formValues.busStationName
       );

// Schedule date time

    formData.append(
      "scheduleDateTime", 
      formValues.propertyscheduling
      );

    try {
      const response = await fetch(
        "https://raddaf-be.onrender.com/listing-property/create",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert('your details submitted successfully')
        console.log("Property created successfully:", data);
      } else {
        const errorData = await response.json();
        console.error("Error creating property:", errorData);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // handle skip function

  const handleSkip = () => {
    if (
      !formValues.contactDetails.fullname ||
      !formValues.contactDetails.email ||
      !formValues.contactDetails.mobileNumber ||
      !formValues.contactDetails.subject
    ) {
      alert("Please fill in all contact details.");
    } else {
    }
  };

  // file upload section

  const fileInputTitleDealsRef = useRef(null);
  const fileInputFittingsContentRef = useRef(null);
  const fileInputEPCRef = useRef(null);
  const fileInputLeaseholdRef = useRef(null);
  const fileInputTA6dRef = useRef(null);
  const fileInputLocalAuthoritySearchdRef = useRef(null);
  const fileInputPropertyValuationReportRef = useRef(null);
  const fileInputFloorPlanRef = useRef(null);

  const [fileUploads, setFileUploads] = useState({
    propertyTitleDealsUploaded: false,
    fittingsContentFormUploaded: false,
    EPCUploaded: false,
    LeaseholdUploaded: false,
    TA6Uploaded: false,
    LocalAuthoritySearchUploaded: false,
    PropertyValuationReportUploaded: false,
    FloorPlanUploaded: false,
  });

  const handleFileChange = (event, className) => {
    const uploadedFile = event.target.files[0];

    const updatedFileUploads = {
      ...fileUploads,
      [`${className}Uploaded`]: uploadedFile !== undefined,
    };

    setFileUploads(updatedFileUploads);

    const updatedFormValues = {
      ...formValues,
      [className]: uploadedFile,
    };

    setFormValues(updatedFormValues);
  };

// images change
  const [selectedimages, setSelectedimages] = useState([]);
  const maxFiles = 4; 
  const allowedExtensions = ['.png', '.jpg', '.jpeg']; // Set allowed file extensions

  const handleimagechange = (event) => {
    const files = event.target.files;
    const selectedFilesArray = Array.from(files);

    // Validate the number of selected files
    if (selectedFilesArray.length > maxFiles) {
      alert("Please select up to ${maxFiles} files.");
      event.target.value = ''; // Clear the file input to prevent selecting too many files
      return;
    }

    // Validate each file's extension
    const invalidFiles = selectedFilesArray.filter(file => {
      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
      return !allowedExtensions.includes(fileExtension);
    });

    if (invalidFiles.length > 0) {
      alert("Invalid file type. Please select only PNG or JPEG files.");
      event.target.value = ''; // Clear the file input to prevent selecting invalid files
      return;
    }

    // Update the selected files state
    setSelectedimages(selectedFilesArray);
    console.log(selectedimages)
  };

  return (
    <div className="Lista-property-con">
      {/* list head */}
      <div className="list-head">
        <img
          src={backarrow}
          alt="back-arrow"
          onClick={() => {
            navigate("/");
          }}
        />
        <h1>List a Property</h1>
        <div>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <Select
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              backgroundColor: "#9E5C08",
              color: "white",
              "&:hover": {
                backgroundColor: "#9E5C08",
              },
              "&:focus": {
                backgroundColor: "#9E5C08",
                borderColor: "blue",
              },
              "& .MuiSelect-icon": {
                color: "white",
              },
            }}
            name="selectsaleorrent"
            value={selectedOption}
            onChange={handleInputChange}
          >
            <MenuItem value="Forsale" onClick={() => setSelectedOption("sale")}>
              Forsale
            </MenuItem>
            <MenuItem value="To-let" onClick={() => setSelectedOption("rent")}>
              To-let
            </MenuItem>
          </Select>
    </FormControl>
        </div>
      </div>
      {/* filter section */}
      <div className="filter-section">
        <div className="for-sale-filter">
          {selectedOption === "Forsale" && (
            <div className="commercial-residential">
              <div className="custom-radio">
                <input
                  type="radio"
                  id="Commercial"
                  name="propertytype"
                  value="Commercial"
                  onChange={handleInputFilter}
                  checked={formValues.propertytype === "Commercial"}
                />
                <label htmlFor="Commercial">Commercial</label>
              </div>
              <div className="custom-radio">
                <input
                  type="radio"
                  id="Residential"
                  name="propertytype"
                  value="Residential"
                  onChange={handleInputFilter}
                  checked={formValues.propertytype === "Residential"}
                />
                <label for="Residential">Residential</label>
              </div>
            </div>
          )}
        </div>
        <div className="to-let-filter">
          {selectedOption === "To-let" && (
            <div className="to-let-filter-sub">
              {/* Commercial / residential */}

              <div class="commercial-residential-rental">
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="Commercial"
                    name="propertytype"
                    value="Commercial"
                    style={{ color: "#9E5C08" }}
                  />
                  <label for="Commercial">Commercial</label>
                </div>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="Residential"
                    name="propertytype"
                    value="Residential"
                  />
                  <label for="Residential">Residential</label>
                </div>
              </div>

              {/* let only / management only / introduce only  */}

              <div class="onlytype">
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="letonly"
                    name="onlytype"
                    value="letonly"
                  />
                  <label for="letonly">Let only</label>
                </div>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="Managementonly"
                    name="onlytype"
                    value="Managementonly"
                  />
                  <label for="Managementonly">Management only </label>
                </div>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="Introduceonly"
                    name="onlytype"
                    value="Introduceonly"
                  />
                  <label for="Introduceonly">Introduce only</label>
                </div>
              </div>

              {/* including bills / excluding bills */}
              <div className="billsonly">
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="includingbills"
                    name="bills"
                    value="includingbills"
                  />
                  <label for="includingbills">Including Bills</label>
                </div>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="excludingbills"
                    name="bills"
                    value="excludingbills"
                  />
                  <label for="excludingbills">Excluding Bills </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Image & document */}
      <div className="image-document">
        <div className="image-upload">
          <div className="image-upload-sub">
            {/* <Imageupload /> */}
            <form onSubmit={handleSubmit}>
              <label htmlFor="fileInput">Select up to 4 files (PNG or JPEG only):</label>
              <input
                type="file"
                id="fileInput"
                name="files"
                multiple
                accept=".png, .jpg, .jpeg"
                onChange={handleimagechange}
              />
              
            </form>
          </div>
        </div>
        {/* Hidden file input element */}
        <div className="documents-main">
          {/* 1 */}
          <div className="documents-sub-1">
            <input
              type="file"
              ref={fileInputTitleDealsRef}
              onChange={(e) => handleFileChange(e, "propertyTitleDeals")}
              style={{ display: "none" }}
            />
            <div
              className="documents-sub"
              onClick={() => fileInputTitleDealsRef.current.click()}
            >
              <input
                type="checkbox"
                checked={fileUploads.propertyTitleDealsUploaded}
                readOnly
              />
              <div className="property-title-deals">property-title-deals</div>
              <img src={uploadimage} alt="uploadimage" />
            </div>
          </div>
          {/* 2 */}
          <div className="documents-sub-1">
            <input
              type="file"
              ref={fileInputFittingsContentRef}
              onChange={(e) => handleFileChange(e, "fittingsContentForm")}
              style={{ display: "none" }}
            />
            <div
              className="documents-sub"
              onClick={() => fileInputFittingsContentRef.current.click()}
            >
              <input
                type="checkbox"
                checked={fileUploads.fittingsContentFormUploaded}
                readOnly
              />
              <div className="Fittings-content-form">Fittings-content-form</div>
              <img src={uploadimage} alt="uploadimage" />
            </div>
          </div>
          {/* 3 */}
          <div className="documents-sub-1">
            <input
              type="file"
              ref={fileInputEPCRef}
              onChange={(e) => handleFileChange(e, "EPC")}
              style={{ display: "none" }}
            />
            <div
              className="documents-sub"
              onClick={() => fileInputEPCRef.current.click()}
            >
              <input
                type="checkbox"
                checked={fileUploads.EPCUploaded}
                readOnly
              />
              <div className="EPC">Energy Performance Certificate (EPC)</div>
              <img src={uploadimage} alt="uploadimage" />
            </div>
          </div>
          {/* 4 */}
          <div className="documents-sub-1">
            <input
              type="file"
              ref={fileInputLeaseholdRef}
              onChange={(e) => handleFileChange(e, "Leasehold")}
              style={{ display: "none" }}
            />
            <div
              className="documents-sub"
              onClick={() => fileInputLeaseholdRef.current.click()}
            >
              <input
                type="checkbox"
                checked={fileUploads.LeaseholdUploaded}
                readOnly
              />
              <div className="Leasehold">Leasehold Information</div>
              <img src={uploadimage} alt="uploadimage" />
            </div>
          </div>
          {/* 5 */}
          <div className="documents-sub-1">
            <input
              type="file"
              ref={fileInputTA6dRef}
              onChange={(e) => handleFileChange(e, "TA6")}
              style={{ display: "none" }}
            />
            <div
              className="documents-sub"
              onClick={() => fileInputTA6dRef.current.click()}
            >
              <input
                type="checkbox"
                checked={fileUploads.TA6Uploaded}
                readOnly
              />
              <div className="TA6">Property Info Form ( TA6 )</div>
              <img src={uploadimage} alt="uploadimage" />
            </div>
          </div>
          {/* 6 */}
          <div className="documents-sub-1">
            <input
              type="file"
              ref={fileInputLocalAuthoritySearchdRef}
              onChange={(e) => handleFileChange(e, "LocalAuthoritySearch")}
              style={{ display: "none" }}
            />
            <div
              className="documents-sub"
              onClick={() => fileInputLocalAuthoritySearchdRef.current.click()}
            >
              <input
                type="checkbox"
                checked={fileUploads.LocalAuthoritySearchUploaded}
                readOnly
              />
              <div className="LocalAuthoritySearch">
                Local Authority Search{" "}
              </div>
              <img src={uploadimage} alt="uploadimage" />
            </div>
          </div>
          {/* 7 */}
          <div className="documents-sub-1">
            <input
              type="file"
              ref={fileInputPropertyValuationReportRef}
              onChange={(e) => handleFileChange(e, "PropertyValuationReport")}
              style={{ display: "none" }}
            />
            <div
              className="documents-sub"
              onClick={() =>
                fileInputPropertyValuationReportRef.current.click()
              }
            >
              <input
                type="checkbox"
                checked={fileUploads.PropertyValuationReportUploaded}
                readOnly
              />
              <div className="PropertyValuationReport">
                Property Valuation Report{" "}
              </div>
              <img src={uploadimage} alt="uploadimage" />
            </div>
          </div>
          {/* 8 */}
          <div className="documents-sub-1">
            <input
              type="file"
              ref={fileInputFloorPlanRef}
              onChange={(e) => handleFileChange(e, "FloorPlan")}
              style={{ display: "none" }}
            />
            <div
              className="documents-sub"
              onClick={() => fileInputFloorPlanRef.current.click()}
            >
              <input
                type="checkbox"
                checked={fileUploads.FloorPlanUploaded}
                readOnly
              />
              <div className="FloorPlan">Floor Plan </div>
              <img src={uploadimage} alt="uploadimage" />
            </div>
          </div>
        </div>
      </div>

      {/* list tail */}
      <div className="list-tail">
        <div className="property-description">
          <h1>Property Description: </h1>
          <p>
            A well-written description of the property, highlighting its key
            features and benefits.
          </p>
          <textarea
            name="propertyDescription"
            value={formValues.propertyDescription}
            onChange={handleInputChange}
            placeholder="Type something about property..."
            rows={6}
            cols={37}
            style={{
              padding: "8px",
              borderRadius: "4px",
              // border: '1px solid #ccc',
              resize: "none",
              margin: "0.1rem 0rem",
              background: "#FFECDE",
              fontSize: "20px",
              outline: "none",
            }}
          />
        </div>
        {/* property dimensions */}
        <div className="property-dimensions-lw">
          <h1>Property dimensions</h1>
          <div className="property-dimensions-main">
            <div className="property-dimensions-sub">
              Reception
              <div className="dimensions-lw">
                <input
                  type="text"
                  name="receptionlength"
                  value={formValues.receptionlength}
                  onChange={handleInputChange}
                  placeholder="length"
                />
                <p>Mtr</p>
                <input
                  type="text"
                  name="receptionwidth"
                  value={formValues.receptionwidth}
                  onChange={handleInputChange}
                  placeholder="width"
                />
                <p>Mtr</p>
              </div>
            </div>
            <div className="property-dimensions-sub">
              Kitchen
              <div className="dimensions-lw">
                <input
                  type="text"
                  name="kitchenlength"
                  value={formValues.kitchenlength}
                  onChange={handleInputChange}
                  placeholder="length"
                />
                <p>Mtr</p>
                <input
                  type="text"
                  name="kitchenwidth"
                  value={formValues.kitchenwidth}
                  onChange={handleInputChange}
                  placeholder="width"
                />
                <p>Mtr</p>
              </div>
            </div>
            <div className="property-dimensions-sub">
              Master Bedroom
              <div className="dimensions-lw">
                <input
                  type="text"
                  name="masterBedroomlength"
                  value={formValues.masterBedroomlength}
                  onChange={handleInputChange}
                  placeholder="length"
                />
                <p>Mtr</p>
                <input
                  type="text"
                  name="masterBedroomwidth"
                  value={formValues.masterBedroomwidth}
                  onChange={handleInputChange}
                  placeholder="width"
                />
                <p>Mtr</p>
              </div>
            </div>
            <div className="property-dimensions-sub">
              Bedroom
              <div className="dimensions-lw">
                <input
                  type="text"
                  name="bedroomlength"
                  value={formValues.bedroomlength}
                  onChange={handleInputChange}
                  placeholder="length"
                />
                <p>Mtr</p>
                <input
                  type="text"
                  name="bedroomwidth"
                  value={formValues.bedroomwidth}
                  onChange={handleInputChange}
                  placeholder="width"
                />
                <p>Mtr</p>
              </div>
            </div>
          </div>
        </div>
        {/* property details */}
        <div className="rooms-info">
          <h1>Property Details</h1>
          <div className="rooms-info-sub">
            <div>
              <SingleBedIcon sx={{ fontSize: "40px" }} />
              <input
                type="text"
                name="numberOfRooms"
                value={formValues.numberOfRooms}
                onChange={handleInputChange}
                pattern="-?\d*"
              />
            </div>
            <div>
              <BathtubIcon sx={{ fontSize: "40px" }} />
              <input
                type="text"
                name="numberOfBathrooms"
                value={formValues.numberOfBathrooms}
                onChange={handleInputChange}
                pattern="-?\d*"
              />
            </div>
            <div>
              <img src={toiletlogo} alt="toilet" style={{ width: "40px" }} />
              <input
                type="text"
                name="numberOfToilets"
                value={formValues.numberOfToilets}
                onChange={handleInputChange}
                pattern="-?\d*"
              />
            </div>
            <div>
              <DirectionsCarFilledIcon sx={{ fontSize: "40px" }} />
              <input
                type="text"
                name="numberOfParkingSpaces"
                value={formValues.numberOfParkingSpaces}
                onChange={handleInputChange}
                pattern="-?\d*"
              />
            </div>
          </div>
        </div>
      </div>
      {/* near by con */}
      <div className="nearby-con">
        <h1>Near by</h1>
        <div className="nearby-sub-con">
          <div className="access">
            <p>Hospital</p>
            <input
              className="accesskm"
              type="text"
              name="hospitalDistance"
              value={formValues.hospitalDistance}
              onChange={handleInputChange}
            />
            <p>KM</p>
            <input
              placeholder="name of the hospital"
              className="nameofaccess"
              name="hospitalName"
              value={formValues.hospitalName}
              onChange={handleInputChange}
            />
          </div>
          <div className="access">
            <p>School</p>
            <input
              className="accesskm"
              type="text"
              name="schoolDistance"
              value={formValues.schoolDistance}
              onChange={handleInputChange}
            />
            <p>KM</p>
            <input
              placeholder="name of the school"
              className="nameofaccess"
              name="schoolName"
              value={formValues.schoolName}
              onChange={handleInputChange}
            />
          </div>
          <div className="access">
            <p>Bus station</p>
            <input
              className="accesskm"
              type="text"
              name="busStationDistance"
              value={formValues.busStationDistance}
              onChange={handleInputChange}
            />
            <p>KM</p>
            <input
              placeholder="name of the Bus station"
              className="nameofaccess"
              name="busStationName"
              value={formValues.busStationName}
              onChange={handleInputChange}
            />
          </div>
          <div className="property-viewing-schedule">
            <h1>Property scheduling</h1>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              className="customLocalizationProvider"
            >
              <DatePicker
                className="customDatePicker"
                value={formValues.propertyscheduling}
                onChange={(newValue) => {
                  handleDateChange(newValue);
                  handleInputChange({
                    target: {
                      name: "propertyscheduling",
                      value: newValue,
                    },
                  });
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
      {/* contact details */}
      <div className="contact-details">
        <h1>Contact details</h1>
        <div className="contact-sub-details">
          <div className="contact-sub-details-mini">
            <p>Name</p>
            <TextField
              // label="With normal TextField"
              id="filled-start-adornment"
              required
              sx={{
                m: 0,
                width: "20rem",
                "& .MuiFilledInput-root": {
                  background: "#FFECDE", // Set background color
                  "&:hover": {
                    background: "#FFECDE", // Maintain background color on hover
                  },
                  "&.Mui-focused": {
                    border: "none", // Remove border on focus
                    boxShadow: "none", // Remove box shadow on focus
                  },
                },
              }}
              variant="filled"
              name="fullname"
              value={formValues.contactDetails.fullname}
              onChange={handleContactDetailsChange}
            />
          </div>
          <div className="contact-sub-details-mini">
            <p>mail id:</p>
            <TextField
              // label="With normal TextField"
              id="filled-start-adornment"
              required
              sx={{
                m: 0,
                width: "20rem",
                "& .MuiFilledInput-root": {
                  background: "#FFECDE", // Set background color
                  "&:hover": {
                    background: "#FFECDE", // Maintain background color on hover
                  },
                  "&.Mui-focused": {
                    border: "none", // Remove border on focus
                    boxShadow: "none", // Remove box shadow on focus
                    borderBlockStyle: "#FFECDE",
                  },
                },
              }}
              variant="filled"
              name="email"
              value={formValues.contactDetails.email}
              onChange={handleContactDetailsChange}
            />
          </div>
          <div className="contact-sub-details-mini">
            <p>Mobile No:</p>
            <TextField
              // label="With normal TextField"
              id="filled-start-adornment"
              required
              sx={{
                m: 0,
                width: "20rem",
                "& .MuiFilledInput-root": {
                  background: "#FFECDE", // Set background color
                  "&:hover": {
                    background: "#FFECDE", // Maintain background color on hover
                  },
                  "&.Mui-focused": {
                    border: "none", // Remove border on focus
                    boxShadow: "none", // Remove box shadow on focus
                    borderBlockStyle: "#FFECDE",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91 |</InputAdornment>
                ),
              }}
              variant="filled"
              name="mobileNumber"
              value={formValues.contactDetails.mobileNumber}
              onChange={handleContactDetailsChange}
            />
          </div>
          <div className="contact-sub-details-mini">
            <p>Subject :</p>
            <TextField
              // label="With normal TextField"
              id="filled-start-adornment"
             required
              
              sx={{
                m: 0,
                width: "20rem",
                fontSize:'50px',
                "& .MuiFilledInput-root": {
                  background: "#FFECDE", // Set background color
                  "&:hover": {
                    background: "#FFECDE", // Maintain background color on hover
                  },
                  "&.Mui-focused": {
                    border: "none", // Remove border on focus
                    boxShadow: "none", // Remove box shadow on focus
                    borderBlockStyle: "#FFECDE",
                  },
                },
              }}
              variant="filled"
              name="subject"
              value={formValues.contactDetails.subject}
              onChange={handleContactDetailsChange}
            />
          </div>
        </div>
      </div>
      {/* place & price */}
      <div className="place-price">
        <div className="place">
          <p>Place </p>
          <TextField
              // label="With normal TextField"
              id="filled-start-adornment"
              required
              sx={{
                m: 0,
                width: "20rem",
                "& .MuiFilledInput-root": {
                  background: "#FFECDE", // Set background color
                  "&:hover": {
                    background: "#FFECDE", // Maintain background color on hover
                  },
                  "&.Mui-focused": {
                    border: "none", // Remove border on focus
                    boxShadow: "none", // Remove box shadow on focus
                  },
                },
              }}
              variant="filled"
              name="place"
              value={formValues.place}
              onChange={handleInputChange}
            />

        </div>
        <div className="price">
          <p>Price </p>
          <TextField
              id="outlined-multiline-flexible"
              // label="Multiline"
              multiline
              maxRows={4}
             
              sx={{
                m: 0,
                width: "20rem",
                display: 'flex', // Use flex display
                alignItems: 'center', // Center vertically
                fontSize: '50',
                "& .MuiFilledInput-root": {
                  background: "#FFECDE", // Set background color
                  "&:hover": {
                    background: "#FFECDE", // Maintain background color on hover
                  },
                  "&.Mui-focused": {
                    border: "none", // Remove border on focus
                    boxShadow: "none", // Remove box shadow on focus
                    borderBlockStyle: "#FFECDE",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"><CurrencyPoundIcon/></InputAdornment>
                ),
              }}
              variant="filled"
              name="price"
              value={formValues.price}
              onChange={handleInputChange}
            />  
        </div>
        <div className="pincode">
          <p>Pincode </p>
          <TextField
              id="outlined-multiline-flexible"
              multiline
            
             
              sx={{
                m: 0,
                width: "20rem",
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                fontSize: '50',
                "& .MuiFilledInput-root": {
                  background: "#FFECDE",
                  "&:hover": {
                    background: "#FFECDE", 
                  },
                  "&.Mui-focused": {
                    border: "none", // Remove border on focus
                    boxShadow: "none", // Remove box shadow on focus
                    borderBlockStyle: "#FFECDE",
                  },
                },
              }}
              variant="filled"
              name="pinCode"
              value={formValues.pinCode}
              onChange={handleInputChange}
            />  
        </div>

                 
      </div>
      <div className="checkboxes">
      <FormControlLabel
        control={<Checkbox />}
        label="Street Parking"
        className="Street-Parking"
        style={{ color: '#9E5C08', fontSize: '30px' }}
        name="streetParking"
        checked={formValues.streetParking}
        onChange={handleInputChange}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Rear Garden"
        className="Rear-Garden"
        style={{ color: '#9E5C08' }}
        name="rearGarden"
        checked={formValues.rearGarden}
        onChange={handleInputChange}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Gas Central Heating"
        className="Gas-Central-Heating"
        style={{ color: '#9E5C08' }}
        name="gasCentralHeating"
        checked={formValues.gasCentralHeating}
        onChange={handleInputChange}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Double-Glazed-Windows"
        className="Double-Glazed-Windows"
        style={{ color: '#9E5C08' }}
        name="doubleGlazedWindows"
        checked={formValues.doubleGlazedWindows}
        onChange={handleInputChange}
      />
         <div className="epcvalue-head">
          <p>EPC Value:</p>
          <FormControl sx={{ m: 1, minWidth: 20 }}>
            <Select
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                
                color: "#9E5C08",
                "&:hover": {
                  Color: "#9E5C08",
                },
                "&:focus": {
                 Color: "#9E5C08",
                  borderColor: "blue", 
                },
                "& .MuiSelect-icon": {
                  color: "white",
                },
              }}
              name="epcvalue"
              value={selectedepcvalue}
              onChange={handleInputChange}
            >
              <MenuItem
                value="A"
                onClick={() => setselectedepcvalue("A")}
              >
                A
              </MenuItem>
              <MenuItem
                value="B"
                onClick={() => setselectedepcvalue("B")}
              >
                B
              </MenuItem>
              <MenuItem
                value="C"
                onClick={() => setselectedepcvalue("C")}
              >
                C
              </MenuItem>
              <MenuItem
                value="D"
                onClick={() => setselectedepcvalue("D")}
              >
                D
              </MenuItem>
              <MenuItem
                value="E"
                onClick={() => setselectedepcvalue("E")}
              >
                E
              </MenuItem>
              <MenuItem
                value="F"
                onClick={() => setselectedepcvalue("F")}
              >
                F
              </MenuItem>
              <MenuItem
                value="G"
                onClick={() => setselectedepcvalue("G")}
              >
                G
              </MenuItem>
            </Select>
          </FormControl>
        </div>
       
      </div>
      <div className="buttons">
        <button onClick={handleSkip}>Skip</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
      <p>
        {Object.entries(formValues).map(([key, value]) => (
          <span key={key}>
            <strong>{key}:</strong> {JSON.stringify(value)} <br />
          </span>
        ))}
      </p>

      {/* <img src={selectedimage} alt=" selected image"/> */}
      </div>
    </div>
  );
};

export default Listaproperty;

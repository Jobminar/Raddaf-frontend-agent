import React, { useRef, useState } from 'react';

const YourComponent = () => {
  const fileInputRef = useRef(null);

  const [fileUploaded, setFileUploaded] = useState({
    button1: false,
    button2: false,
    button3: false,
  });

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (buttonKey, e) => {
    const selectedFile = e.target.files[0];
    console.log(`Selected file for ${buttonKey}:`, selectedFile);

    setFileUploaded((prevState) => ({
      ...prevState,
      [buttonKey]: true,
    }));
  };

  return (
    <div>
      {Object.keys(fileUploaded).map((buttonKey, index) => (
        <div key={buttonKey}>
          <button onClick={handleFileSelect}>
            Choose File for {buttonKey}
          </button>
          {fileUploaded[buttonKey] && (
            <label>
              <input type="checkbox" checked disabled />
              File Uploaded for {buttonKey}
            </label>
          )}
        </div>
      ))}
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => handleFileChange('button1', e)} // You can dynamically change the buttonKey here
        hidden
      />
    </div>
  );
};

export default YourComponent;

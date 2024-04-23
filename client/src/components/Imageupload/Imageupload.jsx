import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import './Imageupload.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Imageupload = () => {
  const navigate  = useNavigate()

  const [images, setImages] = React.useState([]);
  const maxNumber = 4;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

 

  useEffect(() => {
    if (images.length === 1) {
      handleProperty(images[0]); // Call handleProperty when a single image is uploaded
    }
  }, [images]);

  
// datasend
  const handleProperty = (item) => {
    setImages(item);
    navigate('/listaproperty', { state: { images: item } });
    console.log(item,'data')
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <div className='view-upload-main-image'>
              <div {...dragProps} className='view-upload-image'>
                {/* {isDragging ? 'Drop here please' : 'Upload space'} */}
                {imageList.map((image, index) => (
                  <img key={index} src={image['data_url']} alt="" />
                ))}
              </div>
            </div>
            
            {errors && (
              <div>
                {errors.maxNumber && (
                  <span>Number of selected images exceed maxNumber</span>
                )}
                {errors.acceptType && (
                  <span>Your selected file type is not allowed</span>
                )}
                {errors.maxFileSize && (
                  <span>Selected file size exceeds maxFileSize</span>
                )}
                {errors.resolution && (
                  <span>Selected file does not match your desired resolution</span>
                )}
              </div>
            )}
            <div className="bottom-actions">
              <button
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                disabled={imageList.length >= maxNumber}
                className="clcikhere"
              >
                Click or Drop here
              </button>
              <button onClick={onImageRemoveAll}>Remove all images</button>
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default Imageupload;

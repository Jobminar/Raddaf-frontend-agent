import React, { useContext, useState } from 'react';
import { TextField, CircularProgress } from '@mui/material';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import '../signup/signup.css'
import { Data } from '../../Total';
const Signup = () => {
  const {arr}=useContext(Data)
  const navigate = useNavigate();
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Username: '',
    email: '',
    password: '',
    Fullname: '',
    title: '',
    zoneNumber: '',
    profileImage: null,
    verified: false,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        if (file.size <= 30 * 1024) {
          setFormData({ ...formData, profileImage: reader.result });
          setWarning('');
        } else {
          setWarning(
            'The selected image exceeds the recommended size of 30KB. Uploading large images may affect performance.'
          );
          Swal.fire({
            icon: 'warning',
            title: 'Image Size Warning',
            text: 'The selected image exceeds the recommended size of 30KB. Uploading large images may affect performance.',
          });
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formDataCopy = { ...formData, verified: false };
      const formDataToSend = new FormData();

      for (const key in formDataCopy) {
        formDataToSend.append(key, formDataCopy[key]);
      }

      const response = await fetch('https://raddaf-be.onrender.com/agent-auth/signup', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          // Add any headers if needed
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data);
        navigate('/login');

        Swal.fire({
          icon: 'success',
          title: 'Successful signup',
          text: 'Signup has been successful',
        });
      } else {
        console.error('Signup failed:', response.status, data);
        Swal.fire({
          icon: 'error',
          title: 'Failed to signup',
          text: 'Signup failed. Please try again later.',
        });
      }
    } catch (error) {
      console.error('Error during signup:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to signup',
        text: 'An unexpected error occurred during signup. Please try again later.',
      });
    } finally {
      setLoading(false);
    }

    console.log('Form data:', formData);
  };

  return (
    <div className='main-formdiv'>
      
      <form className='form-field1' onSubmit={handleSubmit}>
        <TextField
          type='text'
          name='Username'
          className='inputs'
          placeholder='Username'
          value={formData.Username}
          onChange={handleInputChange}
        />

        <TextField
          type='email'
          name='email'
          className='inputs'
          placeholder='Email'
          value={formData.email}
          onChange={handleInputChange}
        />

        <TextField
          type='password'
          name='password'
          className='inputs'
          placeholder='Password'
          value={formData.password}
          onChange={handleInputChange}
        />

        <TextField
          type='text'
          name='Fullname'
          className='inputs'
          placeholder='Fullname'
          value={formData.Fullname}
          onChange={handleInputChange}
        />

        <TextField
          type='text'
          name='title'
          className='inputs'
          placeholder='Title'
          value={formData.title}
          onChange={handleInputChange}
        />

        <TextField
          type='text'
          name='zoneNumber'
          className='inputs'
          placeholder='Zone Number'
          value={formData.zoneNumber}
          onChange={handleInputChange}
        />

        <input
          type='file'
          name='profileImage'
          className='inputs'
          accept='image/*'
          onChange={handleFileChange}
        />
        <p style={{ color: 'red' }}>{warning}</p>

        <button
          variant='contained'
          className='button-agent'
          type='submit'
          disabled={loading}
        >
          {loading && <CircularProgress size={24} style={{ marginRight: 8 ,color:'white'}} />} Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

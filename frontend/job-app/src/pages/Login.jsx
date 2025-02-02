// pages/LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password)).then(() => {
      toast('Login Successful');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    });
  };

  return (
    <div className='container mx-auto p-4'>
      <ToastContainer />
      <h1 className='text-2xl'>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border p-2'
          />
        </div>
        <div className='mb-4'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border p-2'
          />
        </div>
        <button type='submit' className='bg-blue-500 text-white p-2'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

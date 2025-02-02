import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'jobSeeker',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData))
      .then(() => {
        toast('Signup successful!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch(() => {
        console.log('Fail to redirect to login ');
      });
    console.log(formData);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className='bg-white p-6 rounded-lg shadow-lg w-96'
      >
        <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>

        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          className='w-full px-4 py-2 border rounded-md mb-3'
          required
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          className='w-full px-4 py-2 border rounded-md mb-3'
          required
        />

        <select
          name='role'
          value={formData.role}
          onChange={handleChange}
          className='w-full px-4 py-2 border rounded-md mb-3'
        >
          <option value='admin'>Admin</option>
          <option value='recruiter'>Recruiter</option>
          <option value='jobSeeker'>Job Seeker</option>
        </select>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-md'
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

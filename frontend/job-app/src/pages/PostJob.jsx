import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
  });

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  // Redirect if not a recruiter
  if (role !== 'recruiter') {
    return <p className='text-red-500 text-center mt-10'>Access Denied!</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/jobs/post', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Job posted successfully!');
      navigate('/jobs');
    } catch (error) {
      console.error('Error posting job:', error.response?.data?.message);
    }
  };

  return (
    <div className='max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Post a Job</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          type='text'
          name='title'
          placeholder='Job Title'
          value={formData.title}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          required
        />
        <input
          type='text'
          name='company'
          placeholder='Company Name'
          value={formData.company}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          required
        />
        <input
          type='text'
          name='location'
          placeholder='Location'
          value={formData.location}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          required
        />
        <textarea
          name='description'
          placeholder='Job Description'
          value={formData.description}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          required
        />
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-md'
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;

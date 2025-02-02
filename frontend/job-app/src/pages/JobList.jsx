import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/api/jobs/all', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs(data.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error.response?.data?.message);
      }
    };

    fetchJobs();
  }, [token]);

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Available Jobs</h2>
      {role === 'recruiter' && (
        <button
          className='mb-4 px-4 py-2 bg-blue-500 text-white rounded'
          onClick={() => navigate('/post-job')}
        >
          Post a Job
        </button>
      )}
      <div className='grid gap-4'>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className='p-4 border rounded shadow'>
              <h3 className='text-xl font-semibold'>{job.title}</h3>
              <p>{job.company}</p>
              <p className='text-gray-600'>{job.location}</p>
              <button
                className='mt-2 px-4 py-2 bg-green-500 text-white rounded'
                onClick={() => navigate(`/job/${job._id}`)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default JobListings;

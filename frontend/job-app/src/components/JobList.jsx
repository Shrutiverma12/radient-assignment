import { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/jobs')
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-3xl font-bold'>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className='border p-4 my-2'>
            <h3 className='text-xl font-bold'>{job.title}</h3>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;

import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';

const dummyJobs = [
  { id: 1, title: 'Frontend Developer', company: 'Google', location: 'Remote' },
  { id: 2, title: 'Backend Engineer', company: 'Amazon', location: 'New York' },
];

const Home = () => {
  const [jobs, setJobs] = useState(dummyJobs);

  const handleSearch = (query) => {
    // Implement API call here (dummy filter for now)
    setJobs(
      dummyJobs.filter((job) =>
        job.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-4'>Find Your Dream Job</h2>
      <SearchBar onSearch={handleSearch} />
      <div className='mt-6 space-y-4'>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;

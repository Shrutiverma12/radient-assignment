import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className='bg-white p-4 rounded-md shadow-md border hover:shadow-lg transition'>
      <h3 className='text-lg font-bold'>{job.title}</h3>
      <p className='text-gray-600'>{job.company}</p>
      <p className='text-sm text-gray-500'>{job.location}</p>
      <Link
        to={`/jobs/${job.id}`}
        className='text-blue-600 mt-2 block hover:underline'
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;

import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='flex space-x-3 mt-4'>
      <input
        type='text'
        placeholder='Search jobs...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='p-2 border rounded-md w-full'
      />
      <button
        onClick={handleSearch}
        className='bg-blue-600 text-white px-4 py-2 rounded-md'
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

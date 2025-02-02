const ProfileCard = ({ user }) => {
  return (
    <div className='bg-white p-4 rounded-md shadow-md border text-center'>
      {/* <img
        src={user.avatar}
        alt='User Avatar'
        className='w-24 h-24 rounded-full mx-auto'
      /> */}
      <h3 className='text-lg font-bold mt-2'>{user.name}</h3>
      <p className='text-gray-600'>{user.email}</p>
      <p className='text-sm text-gray-500'>{user.role}</p>
    </div>
  );
};

export default ProfileCard;

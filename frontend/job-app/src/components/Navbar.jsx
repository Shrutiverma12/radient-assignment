//src/components/Navbar.jsx
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className='bg-gray-800 p-4 text-white flex justify-between'>
      <Link to='/'>Home</Link>
      {token ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;

// src/App.js
import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import JobListings from './pages/JobList';
import PostJob from './pages/PostJob';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/jobs'
          element={<ProtectedRoute allowedRoles={['jobSeeker', 'recruiter']} />}
        >
          <Route index element={<JobListings />} />
        </Route>
        <Route
          path='/post-job'
          element={<ProtectedRoute allowedRoles={['recruiter']} />}
        >
          <Route index element={<PostJob />} />
        </Route>
        <Route path='/unauthorized' element={<h2>Unauthorized Access</h2>} />
      </Routes>
    </Router>
  );
};

export default App;

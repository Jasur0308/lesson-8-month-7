import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        username: credentials.username,
        password: credentials.password
      });

      localStorage.setItem('authToken', response.data.access_token);
      navigate('/profile');
    } catch (error) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full max-w-md m-auto bg-white p-8 rounded-md shadow-md'>
      <h2 className='text-2xl font-bold mb-6'>Login</h2>
      {error && <p className='text-red-600 mb-4'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className='block mb-4'>
          Username:
          <input
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
            className='w-full p-2 border rounded-md'
            required
          />
        </label>
        <label className='block mb-4'>
          Password:
          <input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
            className='w-full p-2 border rounded-md'
            required
          />
        </label>
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
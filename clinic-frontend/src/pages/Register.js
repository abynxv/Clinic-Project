import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/users/register/', formData);
      alert('Registration successful!');
      navigate('/');
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error(err.response?.data);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} required />
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} required />
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '12px' }}>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default Register;
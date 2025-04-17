import React, { useState } from 'react';

function Signup({ setActiveTab }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState({
    text: '',
    type: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const { username, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: '', type: '' });

    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage({
        text: 'Passwords do not match',
        type: 'error'
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: 'Registration successful! You can now login.',
          type: 'success'
        });
        
        // Clear form
        setFormData({
          username: '',
          password: '',
          confirmPassword: ''
        });
        
        // Switch to login tab after 2 seconds
        setTimeout(() => {
          setActiveTab('login');
        }, 2000);
      } else {
        setMessage({
          text: data.message || 'Registration failed',
          type: 'error'
        });
      }
    } catch (error) {
      setMessage({
        text: 'An error occurred. Please try again.',
        type: 'error'
      });
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="button" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}
      <div className="switch-form">
        <p>
          Already have an account?{' '}
          <button 
            onClick={() => setActiveTab('login')}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#4CAF50', 
              cursor: 'pointer',
              padding: 0,
              textDecoration: 'underline'
            }}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;

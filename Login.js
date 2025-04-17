import React, { useState } from 'react';

function Login({ setActiveTab }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState({
    text: '',
    type: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: 'Login successful!',
          type: 'success'
        });
        
        // Store token in localStorage
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Clear form
        setFormData({
          username: '',
          password: ''
        });
      } else {
        setMessage({
          text: data.message || 'Login failed',
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
      <h2>Login</h2>
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
        <button type="submit" className="button" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}
      <div className="switch-form">
        <p>
          Don't have an account?{' '}
          <button 
            onClick={() => setActiveTab('signup')}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#4CAF50', 
              cursor: 'pointer',
              padding: 0,
              textDecoration: 'underline'
            }}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;

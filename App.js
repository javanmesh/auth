import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="app-container">
      <div className="auth-container">
        <header className="auth-header">
          <h1>Sample Test Login/Signup System</h1>
          <p className="author-info">by Javan Meshack</p>
        </header>
        
        <div className="auth-tabs">
          <button 
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button 
            className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>
        
        <div className="auth-content">
          {activeTab === 'login' ? (
            <Login setActiveTab={setActiveTab} />
          ) : (
            <Signup setActiveTab={setActiveTab} />
          )}
        </div>
        
        <footer className="auth-footer">
          <p>Created by Javan Meshack &copy; 2025 - Test Project</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

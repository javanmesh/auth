// Simple in-memory database for demonstration
// In a real application, you would use a proper database like MongoDB or PostgreSQL

let users = [];
let userId = 1;

/**
 * Get a user by username
 * @param {string} username - Username to search for
 * @returns {Object|null} - User object or null if not found
 */
function getUserByUsername(username) {
  return users.find(user => user.username === username) || null;
}

/**
 * Create a new user
 * @param {string} username - Username for the new user
 * @param {string} password - Hashed password for the new user
 * @returns {Object} - Created user object
 */
function createUser(username, password) {
  const newUser = {
    id: userId++,
    username,
    password,
    createdAt: new Date()
  };
  
  users.push(newUser);
  return newUser;
}

module.exports = {
  getUserByUsername,
  createUser
};

// NOTE: For a production application, you would want to use a real database.
// Example implementations for MongoDB or PostgreSQL would replace this file.

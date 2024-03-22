const pool = require('./connections');

// Define database queries here
async function getAllDepartments() {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM departments');
    return rows;
  } catch (error) {
    console.error('Error retrieving departments:', error);
    throw error;
  }
}

// Define other database queries as needed

module.exports = {
  getAllDepartments
  // Add other functions here
};

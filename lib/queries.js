const pool = require('./connections');

async function getAllDepartments() {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM departments');
    return rows;
  } catch (error) {
    console.error('Error retrieving departments:', error);
    throw error;
  }
}

async function getAllRoles() {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM roles');
    return rows;
  } catch (error) {
    console.error('Error retrieving roles:', error);
    throw error;
  }
}

async function getAllEmployees() {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM employees');
    return rows;
  } catch (error) {
    console.error('Error retrieving employees:', error);
    throw error;
  }
}

async function addDepartment(name) {
  try {
    if (!name) {
      throw new Error('Department name cannot be null');
    }
    const [rows, fields] = await pool.query('INSERT INTO departments (name) VALUES (?)', [name]);
    return rows;
  } catch (error) {
    console.error('Error adding department:', error);
    throw error;
  }
}

async function addRole(title, salary, department_id) {
  try {
    if (!title || !salary || !department_id) {
      throw new Error('Title, salary, and department ID are required');
    }
    const [rows, fields] = await pool.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]);
    return rows;
  } catch (error) {
    console.error('Error adding role:', error);
    throw error;
  }
}

async function addEmployee(first_name, last_name, role_id, manager_id) {
  try {
    if (!first_name || !last_name || !role_id) {
      throw new Error('First name, last name, and role ID are required');
    }
    const [rows, fields] = await pool.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id]);
    return rows;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
}

async function updateEmployeeRole(employee_id, role_id) {
  try {
    if (!employee_id || !role_id) {
      throw new Error('Employee ID and role ID are required');
    }
    const [rows, fields] = await pool.query('UPDATE employees SET role_id = ? WHERE id = ?', [role_id, employee_id]);
    return rows;
  } catch (error) {
    console.error('Error updating employee role:', error);
    throw error;
  }
}

// Add other functions as needed

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
  // Add other functions here
};

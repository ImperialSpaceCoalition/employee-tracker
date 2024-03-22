const { mainMenuPrompt } = require('./lib/prompts');
const { 
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
  deleteDepartment,
  deleteRole,
  deleteEmployee,
  getEmployeesByManager,
  getEmployeesByDepartment,
  getDepartmentBudget
} = require('./lib/queries');
const inquirer = require('inquirer');

async function startApp() {
  try {
    console.log('Displaying main menu prompt...');
    const { action } = await mainMenuPrompt();

    switch (action) {
      case 'View all departments':
        console.log('User selected action: View all departments');
        const departments = await getAllDepartments();
        console.table(departments);
        break;
      case 'View all roles':
        console.log('User selected action: View all roles');
        const roles = await getAllRoles();
        console.table(roles);
        break;
      case 'View all employees':
        console.log('User selected action: View all employees');
        const employees = await getAllEmployees();
        console.table(employees);
        break;
      case 'Add a department':
        console.log('User selected action: Add a department');
        const { departmentName } = await inquirer.prompt([
          {
            type: 'input',
            name: 'departmentName',
            message: 'Enter the name of the department:'
          }
        ]);
        await addDepartment(departmentName);
        console.log('Department added successfully!');
        break;
      case 'Add a role':
        console.log('User selected action: Add a role');
        // Prompt user for role details
        const roleDetails = await inquirer.prompt([
          {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the role:'
          },
          {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role:'
          },
          {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID for the role:'
          }
        ]);
        await addRole(roleDetails);
        console.log('Role added successfully!');
        break;
      case 'Add an employee':
        console.log('User selected action: Add an employee');
        // Prompt user for employee details
        const employeeDetails = await inquirer.prompt([
          {
            type: 'input',
            name: 'firstName',
            message: 'Enter the first name of the employee:'
          },
          {
            type: 'input',
            name: 'lastName',
            message: 'Enter the last name of the employee:'
          },
          {
            type: 'input',
            name: 'roleId',
            message: 'Enter the role ID for the employee:'
          },
          {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID for the employee:'
          }
        ]);
        await addEmployee(employeeDetails);
        console.log('Employee added successfully!');
        break;
      case 'Update an employee role':
        console.log('User selected action: Update an employee role');
        // Prompt user for employee and role details
        const updateEmployeeRoleDetails = await inquirer.prompt([
          {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the ID of the employee to update:'
          },
          {
            type: 'input',
            name: 'newRoleId',
            message: 'Enter the new role ID for the employee:'
          }
        ]);
        await updateEmployeeRole(updateEmployeeRoleDetails);
        console.log('Employee role updated successfully!');
        break;
      case 'Exit':
        console.log('Exiting application...');
        process.exit(0);
        break;
      default:
        console.log('Invalid action');
        break;
    }
  } catch (error) {
    console.error('Error in application:', error);
  }
}

startApp();

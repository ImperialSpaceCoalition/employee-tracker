const { mainMenuPrompt } = require('./lib/prompts');
const { getAllDepartments } = require('./lib/queries');

async function startApp() {
  try {
    // Display the main menu prompt
    const { action } = await mainMenuPrompt();

    // Handle user action
    switch (action) {
      case 'View all departments':
        // Call function to view all departments
        const departments = await getAllDepartments();
        console.log(departments);
        break;
      // Add cases for other actions
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

// Start the application
startApp();

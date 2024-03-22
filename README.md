# Employee Tracker

Employee Tracker is a command-line application built with Node.js, MySQL, and Inquirer that allows business owners to view and manage departments, roles, and employees in their company.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use the Employee Tracker application, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/employee-tracker.git
Navigate to the project directory:

bash
Copy code
cd employee-tracker
Install the necessary dependencies:

bash
Copy code
npm install
Set up your MySQL database by importing the schema and seeds:

bash
Copy code
mysql -u your-username -p employeetracker_db < db/schema.sql
mysql -u your-username -p employeetracker_db < db/seeds.sql
Replace your-username with your MySQL username.

Update the database configuration in config/dbConfig.js with your MySQL username and password.

You're ready to use the application!

##Usage
To run the Employee Tracker application, execute the following command in your terminal:

bash
Copy code
node index.js
Follow the prompts to perform various actions such as viewing departments, roles, and employees, adding new departments, roles, and employees, updating employee roles, and more.

##Features
View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee role
View employees by manager
View employees by department
Delete departments, roles, and employees
View total utilized budget of a department
Demo
To see a demo of the Employee Tracker application in action, click here to watch the walkthrough video.

##Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

-Fork the repository
-Create a new branch (git checkout -b feature)
-Make your changes
-Commit your changes (git commit -am 'Add new feature')
-Push to the branch (git push origin feature)
-Create a new Pull Request
##License
N/A

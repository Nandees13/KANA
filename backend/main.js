// main.js

const con = require('./server'); // Import the MySQL connection

// Function to create the Faculty database if not exists
function createDatabase() {
  const dbName = 'Faculty';
  const dbCreationQuery = `CREATE DATABASE IF NOT EXISTS ${dbName};`;

  con.query(dbCreationQuery, (err) => {
    if (err) throw err;
    console.log('Database created');
  });

  // Switch to using the created database
  con.query(`USE ${dbName};`, (err) => {
    if (err) throw err;
    console.log(`Using database: ${dbName}`);
  });
}

// Function to create a table with provided name and columns
 export const createTable = (tableName, columns) => {
  let createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (`;

  for (const [columnName, conditions] of Object.entries(columns)) {
    const formattedColumnName = columnName.replace(/\s/g, '_').replace(/^_+|_+$/g, '');
    const columnDefinition = `${formattedColumnName} ${conditions.join(' ')} , `;
    createTableQuery += columnDefinition;
  }

  createTableQuery = createTableQuery.slice(0, -2); // Remove the trailing comma
  createTableQuery += ');';

  con.query(createTableQuery, (err) => {
    if (err) throw err;
    console.log(`${tableName} Table created`);
  });
}

// Call the functions to create the database and tables
createDatabase();

// Example: Create SignUp table
 export const signUpCols = {
  'Name': ['VARCHAR(100)', 'NOT NULL'],
  'Position': ['VARCHAR(100)', 'NOT NULL'],
  'Specialization': ['VARCHAR(100)', 'NOT NULL'],
  'Email_address': ['VARCHAR(100)', 'NOT NULL'],
  'Password': ['VARCHAR(100)', 'NOT NULL'], // Assuming you have a password column
};

createTable('SignUp', signUpCols);

// Add more table creation calls as needed

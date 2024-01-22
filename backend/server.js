import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'faculty',
  port: 3307,
  connectionLimit: 10,
});

const createTable = (tableName, columns) => {
  let createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (`;

  for (const [columnName, conditions] of Object.entries(columns)) {
    const formattedColumnName = columnName.replace(/\s/g, '_').replace(/^_+|_+$/g, '');
    const columnDefinition = `${formattedColumnName} ${conditions.join(' ')} , `;
    createTableQuery += columnDefinition;
  }

  createTableQuery = createTableQuery.slice(0, -2); // Remove the trailing comma
  createTableQuery += ');';

  pool.query(createTableQuery, (err) => {
    if (err) console.error(`Error creating ${tableName} Table: ${err.message}`);
    else console.log(`${tableName} Table created`);
  });
};

const signUpCols = {
  'Name': ['VARCHAR(100)', 'NOT NULL'],
  'Position': ['VARCHAR(100)', 'NOT NULL'],
  'Specialization': ['VARCHAR(100)', 'NOT NULL'],
  'Email_address': ['VARCHAR(100)', 'NOT NULL'],
  'Password': ['VARCHAR(100)', 'NOT NULL'],
};

const attendCols = {
  'S.No': ['INT AUTO_INCREMENT', 'PRIMARY KEY'],
  'Faculty_Name': ['VARCHAR(100)', 'NOT NULL'],
  'AAD_No_Budget_Ref_No': ['VARCHAR(100)', 'NOT NULL'],
  'Event_Type': ['VARCHAR(100)', 'NOT NULL'],
  'Sponsored_Collaboration': ['VARCHAR(100)', 'NOT NULL'],
  'Program_Certification_Name': ['VARCHAR(100)', 'NOT NULL'],
  'From_Date': ['VARCHAR(10)', 'NOT NULL'],
  'To_Date': ['VARCHAR(10)', 'NOT NULL'],
  'No_of_Days_Attended': ['INT', 'NOT NULL'],
  'Venue': ['VARCHAR(100)', 'NOT NULL'],
  'Beneficiary': ['VARCHAR(100)', 'NOT NULL'],
  'Event_Outcome': ['VARCHAR(100)', 'NOT NULL'],
  'Budget_Utilized_Rupees': ['INT', 'NOT NULL'],
  'Proof_for_Archive': ['VARCHAR(255)', 'NOT NULL'],
  'Link_to_Proof': ['VARCHAR(255)', 'NOT NULL'],
};

// Connect to MySQL
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error getting MySQL connection:', err.message);
  } else {
    console.log('Connected to MySQL');
    // Create Attend table
    //createTable('attendData', attendCols);

    // Release the connection
    connection.release();
  }
});

// Middleware to parse JSON data
app.use(express.json());

// API endpoint for handling login requests
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  try {
    const query = `SELECT * FROM SignUp WHERE email_address = ? AND password = ?`;
    pool.query(query, [email, password], (err, results) => {
      if (err) throw err;

      if (results.length > 0) {
        // Successful login
        return res.status(200).json({ success: true, user: results[0] });
      } else {
        // Invalid credentials
        return res.status(400).json({ success: false, message: 'Invalid credentials' });
      }
    });
  } catch (error) {
    return res.status(400).json({ message: `some error occurred ${error}` });
  }
});

// API endpoint for handling signup requests
app.post('/signup', (req, res) => {
  const { email, password, name, position, specialization } = req.body;

  try {
    const query = `INSERT INTO SignUp (Name, Position, Specialization, Email_address, Password) VALUES (?, ?, ?, ?, ?)`;
    pool.query(query, [name, position, specialization, email, password], (err, results) => {
      if (err) throw err;

      return res.status(201).json({ success: true, user: results.insertId });
    });
  } catch (error) {
    return res.status(400).json({ message: `some error occurred ${error}` });
  }
});


app.post('/update', (req, res) => {
  const { name,eventtype,fromdate,todate} = req.body;

  try {
    const query = `UPDATE attendData (FacultyName, EventType,FromDate, ToDate) VALUES (?,?, ?, ?)`;
    pool.query(query, [name,eventtype,fromdate,todate], (err, results) => {
      if (err) throw err;

      return res.status(201).json({ success: true, user: results.insertId });
    });
  } catch (error) {
    return res.status(400).json({ message: `some error occurred ${error}` });
  }
});

// API endpoint for handling adding data to Attend table
app.post('/add-attend-data', (req, res) => {
  const attendData = req.body;

  const columns = Object.keys(attendData).join(', ');
  const values = Object.values(attendData).map(val => `"${val}"`).join(', ');

  try {
    const query = `INSERT INTO attendData (${columns}) VALUES (${values})`;
    pool.query(query, (err) => {
      if (err) throw err;

      return res.status(201).json({ success: true, message: 'Data added to Attend table' });
    });
  } catch (error) {
    return res.status(400).json({ message: `some error occurred ${error}` });
  }
});

// API endpoint to fetch data from the Attend table
// API endpoint to fetch data from the Attend table
// API endpoint to fetch data from the AttendData table
app.get('/get-attend-data', (req, res) => {
  try {
    const query = 'SELECT SNo, FacultyName, EventType, FromDate, ToDate FROM attendData';
    pool.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching data from AttendData table:', err);
        return res.status(400).json({ success: false, message: 'Error fetching data from AttendData table', error: err.message });
      }

      return res.status(200).json({ success: true, data: results });
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(400).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
});


app.delete('/delete-attend-data/:sno', (req, res) => {
    const sno = req.params.sno;

  try {
    const deleteQuery = 'DELETE FROM attendData WHERE SNo = ?';

    pool.query(deleteQuery, [sno], (err, results) => {
      if (err) {
        console.error('Error deleting data from Attend table:', err);
        return res.status(400).json({ success: false, message: 'Error deleting data from Attend table', error: err.message });
      }

      return res.status(200).json({ success: true, message: 'Data deleted from Attend table' });
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(400).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


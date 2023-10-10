const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const mysql = require('mysql2/promise');

app.use(express.json()) // for parsing application/json
app.use(cors());

async function main() {

  // create the connection to database
  const connection = await mysql.createConnection(
    {host:'localhost', user: 'root', password: 'root', database: 'tireappdb'}
  );

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  // route to adding new customer tire set
  app.post('/tiresets', async (req, res) => {
    // read the incoming customer data from the post request body
    // we blindly trust the body structure to be correct always
    const customer = req.body;

    // insert the customer data into the database
    const [rows, fields] = await connection.execute('INSERT INTO `tiresets` ()');

    res.send('Hello Tire World!')
  });

  // route to get all customer tire sets
  app.get('/tiresets', async (req, res) => {
    // search customer tire sets by customer name and registration number
    // implemented via query paramters

    // if no query params present, then return all customer tire sets
    const [rows, fields] = await connection.execute('SELECT * FROM `tiresets`');
    res.send(rows)
  });

  // route to get customer tire set by id 
  app.get('/tiresets/:id', (req, res) => {

  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

main();
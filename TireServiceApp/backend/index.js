const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2/promise');

async function main() {

  // create the connection to database
  const connection = await mysql.createConnection(
    {host:'localhost', user: 'root', password: 'root', database: 'tireappdb'}
  );

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  // route to adding new customer tire set
  app.post('/tiresets', (req, res) => {
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
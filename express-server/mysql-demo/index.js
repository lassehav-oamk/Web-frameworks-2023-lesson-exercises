const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2/promise');

async function main() {
  const connection = await mysql.createConnection(
      {host:'localhost', user: 'root', password: 'root', database: 'test'}
  );

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/data', async (req, res) => {
    console.log('fetching data');
    const [rows, fields] = await connection.execute('SELECT * FROM `test-table`');
    console.log(rows);
    res.send(rows);
  })

  app.post('/data', async (req, res) => {
    console.log('inserting data');
    const [rows, fields] = await connection.execute('INSERT INTO `test-table` (`data`) VALUES (?)', ['example value']);
    console.log(rows);
    res.send(rows);
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

main();

process.on('exit', function() {
  console.log("exit");
  connection.end();
});
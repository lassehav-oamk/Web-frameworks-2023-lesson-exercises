const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const mysql = require("mysql2/promise");

app.use(express.json()); // for parsing application/json
app.use(cors());

async function main() {
  // create the connection to database
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "tireappuser",
    //password: "root",
    database: "tireappdb",
  });

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.post("/initialize", async (req, res) => {
    // the existing database would be dropped and recreated
    // create the tireset table
    /*
    CREATE TABLE `tireappdb`.`tiresets` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `customerName` VARCHAR(45) NULL,
        `carRegistration` VARCHAR(45) NULL,
        `tiresInSet` INT NULL,
        PRIMARY KEY (`id`));

    */
    // fill the table with some data
    /*
    INSERT INTO `tireappdb`.`tiresets` (`customerName`, `carRegistration`, `tiresInSet`) VALUES ('John Doe', 'ABC-123', '34');
    INSERT INTO `tireappdb`.`tiresets` (`customerName`, `carRegistration`, `tiresInSet`) VALUES ('Mary Sue', 'AAA-444', '2');
    */
  });

  // route to adding new customer tire set
  /*
    this route expects the following json structure in the request body
    {
        "customerName": "John Doe",
        "carRegistration": "ABC-123",
        "tiresInSet": 4
    }
  */
  app.post("/tiresets", async (req, res) => {
    // read the incoming customer data from the post request body
    // we blindly trust the body structure to be correct always
    const customer = req.body;
    console.log(customer);

    // insert the customer data into the database
    const [rows, fields] = await connection.execute(
      "INSERT INTO `tiresets` (customerName, carRegistration, tiresInSet) VALUES (?, ?, ?)",
      [customer.customerName, customer.carRegistration, customer.tiresInSet]
    );

    res.send("Tireset added successfully");
  });

  // route to get all customer tire sets
  app.get("/tiresets", async (req, res) => {
    // search customer tire sets by customer name and registration number
    // implemented via query paramters

    // if no query params present, then return all customer tire sets
    const [rows, fields] = await connection.execute("SELECT * FROM `tiresets`");
    res.send(rows);
  });

  // route to get customer tire set by id
  app.get("/tiresets/:id", (req, res) => {});

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();

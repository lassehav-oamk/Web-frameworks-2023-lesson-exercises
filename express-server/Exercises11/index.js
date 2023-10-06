const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
  res.send('Hello World!')
})


/* Initialize the user array, with user objects
   of the following structure: 
   * id 
  * first name 
  * family name 
  * email 
  * gender 
  * birthdate  */
const users = [
  {
    id: 1,
    firstName: 'John',
    familyName: 'Doe',
    email: 'john@email.com',
    gender: 'male',
    birthdate: '1980-01-01'
  },
  {
    id: 2,
    firstName: 'Mary',
    familyName: 'Sue',
    email: 'mary@email.com',
    gender: 'female',
    birthdate: '1982-01-01'
  },
  {
    id: 3,
    firstName: 'Peter',
    familyName: 'Maxwell',
    email: 'peter@email.com',
    gender: 'male',
    birthdate: '1985-01-01'
  },
  {
    id: 4,
    firstName: 'Susan',
    familyName: 'Doe',
    email: 'susan@email.com',
    gender: 'female',
    birthdate: '1970-01-01'
  },{
    id: 5,
    firstName: 'Howard',
    familyName: 'Johnson',
    email: 'hiward@email.com',
    gender: 'male',
    birthdate: '1987-01-01'
  }
];

app.get('/api/users', (req, res) => {

  // check if there are query parameters present
  if(Object.keys(req.query).length > 0) {
    // check if query parameter gender is present
    if(req.query.hasOwnProperty('gender')) {
      // return all users who have matching gender property
      const matchingUsers = users.filter(user => user.gender === req.query.gender);
      res.json(matchingUsers);
      return;
    }

    // check if query parameter for age is present
    if(req.query.hasOwnProperty('age')){
      // return all users whos age is equal or greater than the age specified in the query parameter
      // to compare the age, we must first calculate the age of the user based on the birthdate

      // born 2020
      // calcuate the age of that person -> 2023-2020 = 3
      // current date - birthdate = age
      /*const currentDate = new Date();
      const currentDateInMilliseconds = currentDate.getTime();
      const birthdate = '1990-01-01';
      const birthdateInMilliseconds = new Date(birthdate).getTime();

      const ageInMilliseconds = currentDateInMilliseconds - birthdateInMilliseconds;
      const ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;
      console.log(ageInYears);*/

      const matchingUsers = users.filter(user => {
        const queryAge = parseInt(req.query.age);

        const currentDate = new Date();
        const currentDateInMilliseconds = currentDate.getTime();
        const birthdate = user.birthdate;
        const birthdateInMilliseconds = new Date(birthdate).getTime();

        const ageInMilliseconds = currentDateInMilliseconds - birthdateInMilliseconds;
        const ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;
        console.log(ageInYears);
        if(ageInYears >= queryAge) {
          return true;
        } else {
          return false;
        }        
      });

      res.json(matchingUsers);
      return;
    }
  } 

  // if no query parameters are present, return all users
  res.json(users);
});

app.post('/api/users', (req, res) => {
  // read the request body of the post request
  console.log(req.body);

  // create a new user object based on the request body
  let newUser = { id: users.length + 1, ...req.body };
  // ...req.body equivalent to as follows:
  //let newUser2 = { id: users.length + 1, firstName: req.body.firstName, familyName: req.body.familyName, email: req.body.email  };

  // add the new user to the user storage, which is the users array in this case
  users.push(newUser);

  res.send('User added ok');
});

app.put('/api/users/:userId', (req, res) => {
  // here find the correct user
  // update the user information
});
app.delete('/api/users/:userId', (req, res) => {
  // here find the correct user
  // delete the user from the users array
});

app.get('/api/users/:userId', (req, res) => { 
  // SQL query to get the user information related to the id
  //'SELECT * FROM users WHERE id = 5'

  // return the user information related to the id
  const userId = req.params.userId;
  /*for(let i = 0; i < users.length; i++){
    // check if the userId matches to the id of the current user object being iterated
    if(userId == users[i].id) {
      res.json(users[i]);
      return;
    }
  }*/
  const foundUser = users.find(user => user.id == userId);
  if(foundUser != undefined) {
    res.json(foundUser);
    return;
  }

  res.status(404).send('User not found');

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
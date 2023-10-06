const express = require('express')
const app = express()
const port = 3000

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

  console.log(req.query);

  // check if there are query parameters present
  // check if query parameter gender is present
  // search for users with matching gender and return them

  // if no query parameters are present, return all users
  res.json(users);
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
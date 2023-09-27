import React, {useState} from 'react'
import UserFilter from './UserFilter'
import UserList from './UserList'

export default function Exercise10_2b() {
  const [filterText, setFilterText] = useState('');
  const [users, setUsers] = useState([{
    firstName: 'Some',
    lastName: 'User'
  }, {
    firstName: 'Test',
    lastName: 'User'
  }]); 

  const filterUsers = (filterParameter) => {
    console.log(filterParameter);
    setFilterText(filterParameter);
  }

  const filteredUsers = users.filter(user => user.firstName.includes(filterText));

  return (
    <div>
      <h1>Exercise 10.2b</h1>
      <UserFilter sendFilterText={filterUsers} />
      <UserList users={filteredUsers}/>
    </div>
  )
}

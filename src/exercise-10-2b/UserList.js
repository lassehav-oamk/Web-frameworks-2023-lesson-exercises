import React from 'react'

export default function UserList({users}) {
  return (
    <div><h1>User List</h1>
      <div>
        { users.map(user => <div>{user.firstName} {user.lastName}</div>)}
      </div>
    </div>
  )
}

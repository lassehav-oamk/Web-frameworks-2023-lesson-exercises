import React, { useState, useEffect } from "react";
import UserFilter from "./UserFilter";
import UserList from "./UserList";

export default function Exercise10_2b() {
  const [filterText, setFilterText] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  const filterUsers = (filterParameter) => {
    console.log(filterParameter);
    setFilterText(filterParameter);
  };

  const filteredUsers = users.filter((user) =>
    user.firstName.includes(filterText)
  );

  return (
    <div>
      <h1>Exercise 10.2b</h1>
      <UserFilter sendFilterText={filterUsers} />
      <UserList users={filteredUsers} />
    </div>
  );
}

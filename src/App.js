import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState()
  useEffect(() => {
    axios.all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/users")
    ])
      .then(([posts, users]) => {
        console.log(posts)
        setUsers(users.data)
      }
      )
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      {users && users.map(user => <h4>{user.name}</h4>)}
    </div>
  );
}

export default App;

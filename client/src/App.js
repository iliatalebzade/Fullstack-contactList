import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`/users`)
      .then(res => {
        setUsers(res.data)
        setLoading(!loading)
      })
  }, [])


  return (
    <div className="App">
      <h1>List</h1>
      {loading &&
        <>
          <h2>Loading Content</h2>
          <div className="spinner"></div>
        </>
      }
      {loading === false &&
          users.map((item, index) => (
            <ul>
              <li><span>First Name: </span>{item.firstName}</li>
              <li><span>Last Name: </span>{item.lastName}</li>
              <li><span>Number: </span>{item.phone}</li>
            </ul>
          ))
      }
    </div>
  );
}

export default App;

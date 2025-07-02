import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    axios.get('/api/githubuserdata')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(`Error fetching data: ${err}`);
      })
  }, []);

  return (
    <>
      <h1>Full Stack Basic</h1>
      <p>Users: {users.length}</p>

      {users.map(({ id, name, login, avatar_url, followers_url, blog, location }) => (
        <div key={id}>
          <h2>{name}</h2>
          <h3>Username: {login}</h3>
          <img src={avatar_url} alt="avatar" />
          <div><a href={followers_url} target='_blank'>Follwers</a></div>
          <div><a href={blog} target='_blank'>Portfolio</a></div>
          <p>Location: {location}</p>
        </div>
      ))}
    </>
  )
}

export default App
import React, { useState } from 'react'
import UserTable from './tables/UserTables'

const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'Tania Doe' },
    { id: 2, name: 'Craig', username: 'Craig Doe' },
    { id: 3, name: 'Ben', username: 'Ben Doe' }
  ]

  const [users, setUsers] = useState(usersData)

  return(
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
         <h2>View users</h2>
         <UserTable users={ users }/>
        </div>
      </div>
    </div>
  );
}

export default App;
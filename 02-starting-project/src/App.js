import React ,{useState} from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
 const [usersList,setUsersList] = useState([]);
  
 const addUserHandler = (name,age) =>{
  setUsersList(
    (prevUsersList)=>{
      return [...prevUsersList,{name : name , age: age ,id : Math.random().toString()}]
    }
  )
 }
 
  return (
    <div>
      <AddUser onAddUser={addUserHandler} users={usersList}  />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

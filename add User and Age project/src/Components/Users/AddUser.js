import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
function AddUser(props) {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title: 'Invalid Input',
            message : 'Please enter a valid name and age(non-empty values).'
        })
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title : 'Invalid Age',
            message : 'Please enter the age greater than or equal to one'
        })
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () =>{
    setError(null);
  }
  return (
    <div>
    {error &&  <ErrorModal
        title={error.title}
        message={error.message}
      onConfirm={errorHandler}></ErrorModal>}
      
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            key={props.users.id}
            type="text"
            name="username"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="Age">Age (years) </label>
          <input
            key={props.users.id}
            type="number"
            name="age"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;

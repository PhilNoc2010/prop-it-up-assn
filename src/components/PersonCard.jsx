import React from 'react';
import { useState } from 'react';

const PersonCard = (props) => {

  const [age, setAge] = useState(props.age);

  const HaveBirthday = () => {
    setAge(age + 1);
  }

  return (
    <fieldset>
      <legend>PersonCard.jsx</legend>
      <div>
          <h1>{ props.lastname}, {props.firstname}</h1>
          <p>Age: {age}</p>
          <p>Hair Color: {props.haircolor}</p>
          <button onClick={HaveBirthday}>Birthday Button for {props.firstname} { props.lastname}</button>
      </div>
    </fieldset>
  )
}





export default PersonCard;
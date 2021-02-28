import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  console.log(contacts);
  return (
    <div>
      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name="Jack Bauer"
        imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />
    </div>
  );
}

export default App;

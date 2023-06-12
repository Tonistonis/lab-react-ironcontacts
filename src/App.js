// src/App.js
import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const contactsArrayFive = contacts.splice(0, 5);

  const [contactsArray, setContactsArray] = useState(contactsArrayFive);
  const remainingContacts = contacts;

  return (
    <div className="App">

    <h1>IRON CONTACTS</h1>

<button type="button">Add Random Contact</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy </th>
        </tr>
        {contactsArray.map((element) => {
        return <tr>
          <td>{element.name}</td>
          <td><img src= {element.pictureUrl} alt = "foto"/></td>
          <td>{element.popularity}</td>
          <td>
                  {element.wonOscar ? (
                    <span role="img" aria-label="Oscar Trophy">
                      🏆
                    </span>
                  ) : null}
                </td>
                <td>
                  {element.wonEmmy ? (
                    <span role="img" aria-label="Emmy Trophy">
                      🏆
                    </span>
                  ) : null}
                </td>
        </tr>
      })}
        
      </table>
  
    </div>
  );
}
export default App;

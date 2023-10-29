//This is my first react sample project
import React, { useState } from "react";
import "./Reminder.css";
function Reminder() {
  const [store, setStore] = useState([]);
  const [input, setInput] = useState("");
  //getting the value entered in the text feild to a string
  const inputget = (event) => {
    setInput(event.target.value);
  };
  //storing the value into an array from the string while clicking the add button
  const storevalue = () => {
    if (input.trim()) {
      setStore([...store, input]);
      setInput("");
    }

    //To delete the displayed lists
  };

  const deletehandle = (index) => {
    setStore(store.filter((item, itemIndex) => itemIndex != index));
  };
  return (
    <div className="app">
      <div className="heading">
        <h1>Reminder App</h1>
      </div>
      <div className="para">
        <h2>What's on your mind 🤔 ?</h2>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder=" 🖊️ add item "
          value={input}
          onChange={inputget}
        />
        <button className="addbtn" onClick={storevalue}>
          Add
        </button>
      </div>
      <ul className="list">
        {store.map((store, index) => (
          <li key={index}>
            {store}

            <button className="deletebtn" onClick={() => deletehandle(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reminder;

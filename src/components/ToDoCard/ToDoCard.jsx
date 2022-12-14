import { useState } from "react";
import "./ToDoCard.scss";

const ToDoCard = () => {
  //use state to catch the input from the input field
  const [textInput, setTextInput] = useState("");

  const handleTextInput = (event) => {
    setTextInput(event.target.value);
  };
  console.log(textInput);

  //make a task array
  let taskArr = ["Eat some Bread", "Do some stuff"];

  //on button click add (.push()) items to the array
  const handleAddTask = () => {
    taskArr = taskArr.push(textInput);
  };
  console.log(taskArr);

  return (
    <div className="ToDoCard__AllCardsContainer">
      <div className="ToDoCard__inputContainer">
        <input
          id="toDoCardTextInput"
          className="ToDoCard--textInput"
          placeholder="Add your task here..."
          type="text"
          onChange={handleTextInput}
        />
        <button className="ToDoCard--addButton" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div className="ToDoCard__CardContainer">
        <input type="checkbox" name="" id="ToDoCardCheck" />
        <p>Sample Text</p>
        <div>
          <button className="ToDoCard--delButton">DEL</button>
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;

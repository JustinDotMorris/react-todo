import "./ToDoCard.scss";

const ToDoCard = () => {
  return (
    <div className="ToDoCard__AllCardsContainer">
      <div className="ToDoCard__inputContainer">
        <input
          className="ToDoCard--textInput"
          placeholder="Add your task here..."
          type="text"
        />
        <button className="ToDoCard--addButton">Add</button>
      </div>
      <div className="ToDoCard__CardContainer">
        <input type="checkbox" name="" id="ToDoCardCheck" />
        <p>Sample Text</p>
        <div>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;

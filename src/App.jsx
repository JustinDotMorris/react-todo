import "./App.scss";
import "./assets/_reset.scss";
import ToDoCard from "./components/ToDoCard/ToDoCard";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Todos</h1>
        <button>Reset</button>
      </header>
      <main>
        <ToDoCard />
      </main>
    </div>
  );
}

export default App;

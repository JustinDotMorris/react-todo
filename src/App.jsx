import "./App.scss";
import "./assets/_reset.scss";
import ToDoCard from "./components/ToDoCard/ToDoCard";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <ToDoCard checkBox="false" taskName="Default text" />
      </main>
    </div>
  );
}

export default App;

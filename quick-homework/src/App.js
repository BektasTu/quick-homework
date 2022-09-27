import "./App.css";
import {persons} from "./assets/person.js";
import {Card} from "./components/card.js"

function App() {
  return (
    <div className="App">
      {persons.map(person => {
        return (<Card key={person.id} person={person} />)
      })}
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Todoslist from './components/Todoslist';

function App() {
  return (
    <div className="App">
     <Todo/>
     <Todoslist/>
    </div>
  );
}

export default App;

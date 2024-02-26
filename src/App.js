import {Outlet, Link} from 'react-router-dom';

import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Routing chestunna</h1>
      <Link to="/Counter"> cc</Link> <br/>
      <Link to="/todo">tt</Link>
      <Outlet/>


    </div>
  );
}

export default App;

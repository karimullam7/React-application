import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Countries from './Components/Countries';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Countries/>
    </div>
  );
}

export default App;

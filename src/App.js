import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Navbaar from './components/Navbaar';





function App() {
  return (
    <>
    <Navbaar/>
      <Link to="/">home</Link>
      <Link to='/rooms'>Rooms</Link>
      <Outlet/>
    </>
  );
}

export default App;

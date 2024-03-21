import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
    <Route path='/' Component={Home} />
    <Route path='/rooms' Component={Rooms} />
    <Route path='/SingleRoom' Component={SingleRoom} />

     
    </>
  );
}

export default App;

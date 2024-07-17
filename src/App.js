import './App.css';
import { Provider } from 'react-redux';
import store from './Store/store';
import Students from './components/Students';
import Counter from './components/Counters';
import Todo from './components/Todos';
import Countries from './components/countries';
import React from 'react';

import Karimcounter from "./components/Karimcounter"
function App() {

  
  return (
    <Provider store={store}>
      <div  className='bt'>
        <h1>Welcome to Redux</h1>
        <Karimcounter/>
        {/* <Students/>
        <Counter/>
        <Todo/> */}
        {/* <Countries/> */}
        
      </div>
    </Provider>
  );
}

export default App;

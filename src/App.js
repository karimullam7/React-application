import './App.css';
import { Provider } from 'react-redux';
import store from './Store/store';
import Students from './components/Students';
import Counter from './components/Counters';
import Todo from './components/Todos';
import Countries from './components/countries';
import React from 'react';

function App() {

  React.useEffect(()=>{
    fetch("https://restcountries.com/v2/all").then(res=>res.json()).then(countries=>{console.log(countries)})
  },[])
  return (
    <Provider store={store}>
      <div  className='bt'>
        <h1>Welcome to Redux</h1>
        <Students/>
        <Counter/>
        <Todo/>
        <Countries/>
      </div>
    </Provider>
  );
}

export default App;

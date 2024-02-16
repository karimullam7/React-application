
import './App.css';

import Counter from './counter';

function App() {
  return (
    <div className="App">
<Counter cname="India" cstart={5000} ad ={1000} ></Counter>
<Counter cname="Australia" cstart={200} ad={5}></Counter>

    </div>
  );
}

export default App;

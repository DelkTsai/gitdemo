// import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import List from './List';


// function App() {
//   return (
//     <div className="App">
//      <p>nihao</p>
//     </div>
//   );
// }

class App extends Component{
  constructor(props){
    super(props);
  }

//演示一下, 这是dev分支,secdev

  render(){
    return (
      <div className="container">
        <List />
      </div>
    )
  }
}


export default App;

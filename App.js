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

//浪漫的定义几个字
class App extends Component{
  constructor(props){
    super(props);
  }


//演示一下, 这是dev分支and main

  render(){
    return (
      <div className="container">
        <List />
      </div>
    )
  }
}


export default App;

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




//演示一下,我叫张三丰,你叫李小二,她叫王五

  render(){
    return (
      <div className="container">
        <List />
      </div>
    )
  }
}


export default App;

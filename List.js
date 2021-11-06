// 导入组件依赖
import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import TrData from './TrData';

function List(){

  //初始化组件状态
  const [users,setUsers] = useState([]);
  const [isLoaded,setIsLoaded] = useState(false);

  //数据请求，更新组件状态
  useEffect(()=>{
    axios.get("http://localhost:8080/api1").then(function(response){
      setUsers(response.data);
      setIsLoaded(true);
    }).catch(function(error){
      console.log(error);
    })
    return ()=>{};
  },[]);

  function handleClick(){
    console.log("clicked");
  }

  // 组件渲染结构，增加点文字说明
  return (
        (<table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">姓名</th>
              <th className="text-center">年龄</th>
              <th className="text-center">性别</th>
            </tr>
          </thead>
          <tbody onClick={handleClick}>
            <TrData users={users}></TrData>
          </tbody>
        </table>
        )
  )
}

// 导出组件
export default List;

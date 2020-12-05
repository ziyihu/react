import React, {Component} from 'react';
import './index.css';
import List from './list';
class App extends Component {
  state = {
    data: {
      family: {
        title: '家人',
        list: [
          {name: '爸爸'},
          {name: '妈妈'}
        ]
      },
      friend: {
        title: '朋友',
        list: [
          {name: '张三'},
          {name: '李四'},
          {name: '王五'}
        ]
      },
      customer: {
        title: '客户',
        list: [
          {name: 'aaaa'},
          {name: 'bbbb'}
        ]
      }
    }
  }
  render() {
    let {data} = this.state;
    return  ( <div className='friend-list'>
        {Object.keys(data).map((item)=>{
          return <List data={data[item]} key={item} />
        })}
      </div>
    )
  }
}

export default App;

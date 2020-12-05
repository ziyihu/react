import React, {Component} from 'react';
import './index.css';
import List from './list';
class App extends Component {
  state = {
    data: {
      family: {
        title: 'family',
        list: [
          {name: 'father'},
          {name: 'mother'}
        ]
      },
      friend: {
        title: 'friend',
        list: [
          {name: 'joey'},
          {name: 'amy'},
          {name: 'rose'}
        ]
      },
      customer: {
        title: 'client',
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

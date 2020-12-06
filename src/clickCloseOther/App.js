import React, {Component} from 'react';
import './index.css';
import List from './list';
class App extends Component {
  state = {
    openChild:'family',
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
  setOpen=(openChild)=>{
    this.setState({
      openChild
    });
  }
  render() {
    let {data,openChild} = this.state;
    return  ( <div className='friend-list'>
      <div>click to open(close others)</div>
        {Object.keys(data).map((item)=>{
          return <List 
            data={data[item]} 
            key={item} 
            isOpen={openChild===item}
            name={item}
            setOpen={this.setOpen}
            />
        })}
      </div>
    )
  }
}

export default App;

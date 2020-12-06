import React,{PureComponent} from 'react';
import Title from './title';
import Create from './create';
import Todos from './todos';
import State from './state';
import './index.css';
class App extends PureComponent {
    // 1. get the data format
    // 2. based on the data render the list
    // 3. implement the add to list function
    // 4. implement the select/delete/update function for 1 item
    /* 
        data: [
            {
                id: 0,
                text: 'data content',
                done: false
            }
        ]
    */
    state = {
        data: [
            {
                id: 0,
                text: 'data content1',
                done: false
            },
            {
                id: 1, 
                text: 'data content2',
                done: false
            },
            {
                id: 2,
                text: 'data content3',
                done: false
            },
        ]
    }
    changeDone=(id,done)=>{
        let {data} = this.state;
        data.forEach(item=>{
            if(item.id === id){
                item.done = done;
            }
        });
        this.setState({
            data: data.map(item=>({...item}))
        });
    }
    editDone=(id,text)=>{
        let {data} = this.state;
        data.forEach(item=>{
            if(item.id === id){
                item.text = text;
            }
        });
        this.setState({
            data: data.map(item=>({...item}))
        });
    }
    addData=(text)=>{
        let {data} = this.state;
        data.push(
            {
                id: data.length,
                text: text,
                done: false
            }
        );
        this.setState({
            data: [...data]
        });
    }
    remove=(id)=>{
        let {data} = this.state;
        data = data.filter(item=>item.id!==id);
        this.setState({
            data
        });
    }
    removeDone=()=>{
        let {data} = this.state;
        data = data.filter(item=>!item.done);
        this.setState({
            data
        });
    }
    render() {
        let {data} = this.state;
        return(
            <div id='todoapp'>
                <Title />
                <div className='content'>
                    <Create addData={this.addData}/>
                    {data.length<1 ? '':<Todos data={data} editDone={this.editDone} changeDone={this.changeDone} remove={this.remove} />}
                    {data.length<1 ? '':<State data={data} removeDone={this.removeDone}/>}
                </div>
            </div>
        )
    }
}
export default App;
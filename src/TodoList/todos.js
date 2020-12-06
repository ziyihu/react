import React,{PureComponent} from 'react';
import Li from './Li';
class Todos extends PureComponent{
    render() {
        let {data,changeDone,editDone,remove} = this.props;
        return(
            <ul id='todo-list'>
                {data.map(item=>{
                    return <Li key={item.id} data={item} changeDone={changeDone} editDone={editDone} remove={remove}/>
                })}
            </ul>
        );
    }
}
export default Todos;
import React,{PureComponent} from 'react';
class State extends PureComponent {
    render() {
        let {data,removeDone} = this.props;
        let doneData = data.filter(item=>item.done);
        let undoneData = data.filter(item=>!item.done);
        return(
            <div id='todo-stats'>
                <span className='todo-count'>
                    <span className='number'>{undoneData.length}</span>
                    <span className='word'>items</span> left.
                </span>
                {doneData.length<1 ? '':<span className='todo-clear'>
                    <a href='#' onClick={()=>{removeDone();}}>
        Clear <span className='number-done'>{doneData.length}</span>
                        completed <span className='word-done'>item</span>
                    </a>
                </span>}
            </div>
        )
    }

}
export default State;
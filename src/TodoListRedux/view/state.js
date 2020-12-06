import React from 'react';
import { connect } from 'react-redux';
function State(props) {
    let {dispatch} = props;
    return (
        <div id='todo-stats'>
            <span className='todo-count'>
                <span className='number'>{props.unDoneLength}</span>
                <span className='word'>items</span> left.
                </span>
            {
                props.doneLength < 1 ? '' : <span className='todo-clear'>
                    <a href='#' onClick={()=>{
                        dispatch({
                            type: 'REMOVEALL'
                        })
                    }}>
                        Clear <span className='number-done'>{props.doneLength}</span>
                        completed <span className='word-done'>item</span>
                    </a>
                </span>
            }
        </div>
    )
}
export default connect(state => {
    return {
        unDoneLength: state.filter(item => !item.done).length,
        doneLength: state.filter(item => item.done).length
    }
})(State);
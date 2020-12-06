import React from 'react';
import Li from './Li';
import { connect } from 'react-redux';
function Todos(props) {
    let { state, dispatch } = props;
    return (
        <ul id='todo-list'>
            {state.map(item => <Li data={item} dispatch={dispatch} key={item.id} />)}
        </ul>
    )
}
export default connect((state, props) => {
    return { state }
})(Todos);
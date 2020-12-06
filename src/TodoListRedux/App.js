import React from 'react';
import './static/index.css';
import Title from './view/title';
import Create from './view/create';
import Todos from './view/todos';
import State from './view/state';
import { connect } from 'react-redux';
function App(props) {
    return (
        <div id='todoapp'>
            <Title />
            <div className="content">
                <Create />
                {props.length > 0 && <Todos />}
                {props.length > 0 && <State />}
            </div>
        </div>
    );
}
export default connect(state => ({
    length: state.length
}))(App)
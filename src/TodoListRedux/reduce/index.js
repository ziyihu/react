import {createStore} from 'redux';
function reducer(state=[
    {
        id: 0,
        text: 'abc',
        done: false
    },
    {
        id: 1,
        text: 'abcd',
        done: false
    },
    {
        id: 2,
        text: 'abcde',
        done: false
    }
],action){
    switch(action.type) {
        case 'ADD':
            state.push({
                id: state.length,
                text: action.val,
                done: false
            })
            return [...state];
        case 'DONE':
            state.forEach(item=>{
                if(item.id === action.id) {
                    item.done = action.done;
                }
            })
            return [...state];
        case 'DELETE':
            return state.filter(item=>(item.id!==action.id));
        case 'EDIT':
            state.forEach(item=>{
                if(item.id === action.id) {
                    item.text = action.text;
                }
            })
            return [...state];
        case 'REMOVEALL':
            return state.filter(item=>!item.done);
    }
    return state;
}
const store = createStore(reducer);
export default store;
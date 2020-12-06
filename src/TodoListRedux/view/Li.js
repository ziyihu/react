import React, { useState, useRef, useEffect } from 'react';
function Li(props) {
    let { data, dispatch } = props;
    let { text, done, id } = data;
    const [edit, setEdit] = useState(false);
    const [inputVal, setInputVal] = useState(text);
    const inputRef = useRef();
    useEffect(() => {
        if (edit) {
            inputRef.current.focus();
        }
    }, [edit])
    return (
        <li className={edit ? 'editing' : ''}>
            <div className={'todo ' + (done ? 'done' : '')}>
                <div className='display'>
                    <input
                        className='check'
                        type='checkbox'
                        checked={done}
                        onChange={({ target }) => {
                            dispatch({
                                type: 'DONE',
                                id: id,
                                done: target.checked
                            })
                        }}
                    />
                    <div className='todo-content' onDoubleClick={() => {
                        setEdit(true);
                    }}>{text}</div>
                    <span className='todo-destroy' onClick={() => {
                        dispatch({
                            type: 'DELETE',
                            id: id
                        })
                    }}></span>
                </div>
                {edit ? <div>
                    <input
                        className='todo-input'
                        value={inputVal}
                        type='text'
                        ref={inputRef}
                        onChange={({ target }) => {
                            // console.error(target);
                            setInputVal(target.value);
                        }}
                        onBlur={() => {
                            if (inputVal.trim()) {
                                dispatch({
                                    type: 'EDIT',
                                    id: id,
                                    text: inputVal
                                })
                            } else {
                                setInputVal(text);
                            }
                            setEdit(false)
                        }}
                    />
                </div> : ''}
            </div>
        </li>
    )
}
export default Li;
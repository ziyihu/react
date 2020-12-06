import React, { useState } from 'react';
import { connect } from 'react-redux';
function Create(props) {
    let { dispatch } = props;
    return (
        <div id='create-todo'>
            <input
                id='new-todo'
                placeholder='what needs to be done'
                type='text'
                autoComplete='no'
                defaultValue=''
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        if (!e.target.value.trim()) { return; }
                        dispatch({
                            type: 'ADD',
                            val: e.target.value
                        });
                        e.target.value = '';
                    }
                }}
            />
        </div>
    );
}
export default connect()(Create);
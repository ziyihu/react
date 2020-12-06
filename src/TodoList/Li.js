import React,{PureComponent,createRef} from 'react';
class Li extends PureComponent {
    state = { 
        edit:false,
        textRef:createRef()
    }
    componentDidUpdate(prevProps, prevState){
        // input focuse
        // if(this.state.edit){
        //     // focused to the input
        //     // get the input dom node
        //     this.state.textRef.current.focus();
        // }
        if (this.state.edit&&!prevState.edit){
            this.state.textRef.current.select();
        }
    }
    render(){
        let {data,changeDone,editDone,remove} = this.props;
        let {done,text} = data;
        let {edit} = this.state;
        return(
                <li className={edit?'editing':''}>
                    <div className={'todo '+ (done?'done':'')}>
                        {edit?<div>
                            <input 
                                ref={this.state.textRef}
                                className='todo-input' 
                                value={text} 
                                type='text' 
                                onChange={(e)=>{
                                    editDone(data.id, e.target.value);
                                }}
                                onBlur={()=>{
                                    this.setState({
                                        edit:false
                                    })
                                }}
                                />
                            </div>:
                        <div className='display'>
                            <input
                                className='check'
                                type='checkbox'
                                checked={done}
                                onChange={
                                    (e) => {
                                        changeDone(data.id, e.target.checked)
                                    }
                                }
                            />
                            <div className='todo-content' onDoubleClick={
                                ()=>{
                                    this.setState({
                                        edit: true
                                    })
                                }
                            }>{text}</div>
                            <span onClick={()=>{
                                remove(data.id);
                            }} className='todo-destroy'></span>
                        </div>
                        }
                    </div>
                </li>
        )
    }
}
export default Li;
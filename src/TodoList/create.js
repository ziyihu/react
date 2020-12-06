import React, {PureComponent} from 'react';
class Create extends PureComponent {
    state = {
        val: ''
    }
    render() {
        let {addData} = this.props;
        let {val} = this.state;
        return (
            <div id='create-todo'>
                <input 
                    id='new-todo' 
                    placeholder='what needs to be done' 
                    type='text' 
                    value={val}
                    autoComplete='no'
                    onChange={(e)=>{
                        this.setState({
                            val:e.target.value
                        })
                    }}
                    onKeyDown={(e)=>{
                        let {val} = this.state
                        if(e.key === 'Enter') {
                            if(!val.trim()) {return;}
                            addData(val);
                            this.setState({
                                val:''
                            })
                        }
                    }}
                    />
            </div>
        )
    }
}
export default Create;
import React,{Component} from 'react';
export default class List extends Component {
    state = {
        isOpen: false,
    }
    render() {
        let {isOpen} = this.state;
        let {data} = this.props;
        let {title,list} = data;
        return(
        <dl className={`friend-group ${isOpen?"expanded":""}`}>
            <dt onClick={()=>{
                this.setState({
                    isOpen: !isOpen
                });
            }}>{title}</dt>
            {
                list.map((item, index)=>{
                    return <dd key={index}>{item.name}</dd>
                })
            }
        </dl>);
    }
}
import React,{Component} from 'react';
import Item from './Item';
export default class CommingSoon extends Component{
    render(){
        return (
            <ul>
                {this.props.commingSoons.map( (item,index) =>
                    <Item film={item} key={index} type="soon"/>
                )}
            </ul>
        )
    }
}

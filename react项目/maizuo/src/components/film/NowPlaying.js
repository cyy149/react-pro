import React,{Component} from 'react';
import Item from './Item';

export default class NowPlaying extends Component{
    render(){
        return (
            <ul>
                {this.props.nowPlayings.map( (item,index) =>
                    <Item film={item} key={index} type="now"/>
                )}
            </ul>
        )
    }
}

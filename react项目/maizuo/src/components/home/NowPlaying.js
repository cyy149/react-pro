import React,{Component} from 'react';
import Item from './Item';

export default class NowPlaying extends Component{
    render(){
        return (
            <div className="now-playing">
                <ul>
                    {this.props.nowPlayings.map( (item,index) =>
                        <Item type="now" film={item} key={index} />
                    )}
                </ul>
                <a href="#">更多热映电影</a>
            </div>
        );
    }
}

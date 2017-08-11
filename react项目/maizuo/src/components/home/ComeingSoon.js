import React,{Component} from 'react';
import Item from './Item';

export default class ComeingSoon extends Component{
    render(){
        return (
            <div className="comeing-soon">
                <ul>
                    {this.props.comeingSoon.map( (item,index) =>
                        <Item type="soon" film={item} key={index} />
                    )}
                </ul>
                <a href="#">更多热映电影</a>
            </div>
        );
    }
}

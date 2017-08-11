import React,{Component} from 'react';
import {hashHistory} from 'react-router';
import './item.less';

export default class Item extends Component{
    getDate(time){
        let date = new Date(time);
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let w = date.getDay();
        return `${m}月${d}日上映 星期${w}`;
    }
    render(){
        return (
            <li onClick={() => hashHistory.push('/filmDetail/'+this.props.film.id) }>
                <img src={this.props.film.poster.thumbnail}/>
                <div className="film-info">
                    <h2>{this.props.film.name}</h2>
                    <p className="desc">{this.props.film.intro}</p>
                    {this.props.type == 'now' ?
                        <p className="extro">{this.props.film.cinemaCount}家影院上映 {this.props.film.watchCount}人购票</p> :
                        <p className="time">{this.getDate(this.props.film.premiereAt)}</p>
                    }
                    <div>{this.props.type=='now' ? <strong>{this.props.film.grade}</strong> : ""} ></div>
                </div>
            </li>
        )
    }
}

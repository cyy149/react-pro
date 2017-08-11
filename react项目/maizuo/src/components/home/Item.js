import React,{Component} from 'react';
import {hashHistory} from 'react-router';

export default class Item extends Component{
    getDate(time){
        let date =new Date(time);
        let m = date.getMonth() + 1;
        let d = date.getDate();
        return `${m}月${d}日上映`
    }
    render(){
        return (
            <li onClick={() => hashHistory.push('/filmDetail/'+this.props.film.id) }>
                <img src={this.props.film.cover.origin} />
                <div className="info">
                    <div>
                        <h2>{this.props.film.name}</h2>
                    {this.props.type=='now' ? <p>{this.props.film.cinemaCount}家影院上映
                        {this.props.film.watchCount}人购票</p>: null
                    }
                    </div>
                    <strong>
                        {this.props.type == "now" ? this.props.film.grade : this.getDate(this.props.film.premiereAt) }
                    </strong>
                </div>
            </li>
        );
    }
}

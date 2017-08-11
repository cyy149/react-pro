import React,{Component} from 'react';
import './list.less';
import NowPlaying from '../../components/film/NowPlaying';
import CommingSoon from '../../components/film/CommingSoon';
import 'whatwg-fetch';

export default class FilmList extends Component{
    constructor(){
        super();
        this.state  = {
            current : 'now', //表示当前组件为正在热映
            nowPlayings : [], //表示正在热映的电影
            commingSoons : [] //表示即将上映的电影
        };
    }
    componentWillMount(){
        let url1 = "http://m.maizuo.com/v4/api/film/now-playing?__t=1489757848979&page=1&count=20";
        fetch("http://localhost:4000/proxy?url="+url1)
             .then( response => response.json())
             .then( res => JSON.parse(res))
             .then( data => {console.log(data);this.setState({nowPlayings : data.data.films})})
             .catch( err => {console.log(err)});

         let url2 = "http://m.maizuo.com/v4/api/film/coming-soon?__t=1489757848983&page=1&count=20";
         fetch("http://localhost:4000/proxy?url="+url2)
              .then( response => response.json())
              .then( res => JSON.parse(res))
              .then( data => {console.log(data);this.setState({commingSoons : data.data.films})})
              .catch( err => {console.log(err)});
    }
    render(){
        return (
            <div className="list">
                <div className="tab">
                    <span onClick={() => this.setState({current:'now'})} className={this.state.current == 'now'? "on" : ""}>正在热映</span>
                    <span onClick={() => this.setState({current:'soon'})} className={this.state.current == 'soon'? "on" : ""}>即将上映</span>
                </div>
                {this.state.current == 'now' ?
                <NowPlaying nowPlayings={this.state.nowPlayings} /> :
                <CommingSoon commingSoons={this.state.commingSoons}/>}
            </div>
        );
    }
}

import React,{Component} from 'react';
import Carousel from "../components/home/Carousel";
import NowPlaying from "../components/home/NowPlaying";
import ComeingSoon from "../components/home/ComeingSoon";
import 'whatwg-fetch';
import '../components/home/film.less';

export default class Home extends Component{
    constructor(){
        super();
        //定义初始状态
        this.state = {
            billboards : [], //轮播数据
            nowPlayings : [], //正在热映的电影
            comeingSoon : [] //即将上映的电影
        }
    }
    componentWillMount(){
        let url1 = "http://m.maizuo.com/v4/api/billboard/home?__t=1489757848973";
        fetch('http://localhost:4000/proxy?url='+url1)
            .then( res => res.json())
            .then( data => JSON.parse(data))
            .then( data1 => {
                console.log(data1);
                //更新数据
                this.setState({
                    billboards : data1.data.billboards
                });
            }).catch( err => console.log(err));

        let url2 = "http://m.maizuo.com/v4/api/film/now-playing?__t=1489757848979&page=1&count=5";
        fetch('http://localhost:4000/proxy?url='+url2)
            .then( res => res.json())
            .then( data => JSON.parse(data))
            .then( data1 => {
                console.log(data1);
                //更新数据
                this.setState({
                    nowPlayings : data1.data.films
                });
            }).catch( err => console.log(err));

        let url3 = "http://m.maizuo.com/v4/api/film/coming-soon?__t=1489757848983&page=1&count=3";
        fetch('http://localhost:4000/proxy?url='+url3)
            .then( res => res.json())
            .then( data => JSON.parse(data))
            .then( data1 => {
                console.log(data1);
                //更新数据
                this.setState({
                    comeingSoon : data1.data.films
                });
            }).catch( err => console.log(err));

    }
    render(){
        return (
            <div>
                <Carousel billboards={this.state.billboards} />
                <NowPlaying  nowPlayings={this.state.nowPlayings}/>
                <ComeingSoon comeingSoon = {this.state.comeingSoon}/>
            </div>
        );
    }
}

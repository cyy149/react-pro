import React,{Component} from 'react';
import './detail.less';

export default class Detail extends Component{
    constructor(){
        super();
        this.state = {
            movie : {} //表示电影的详情
        }
    }
    componentWillMount(){
        //获取id
        let id = this.props.params.id;
        let url = `http://m.maizuo.com/v4/api/film/${id}?__t=1489758012282`;
        fetch("http://localhost:4000/proxy?url="+url)
             .then( response => response.json())
             .then( res => JSON.parse(res))
             .then( data => {console.log(data);this.setState({movie : data.data.film})})
             .catch( err => {console.log(err)});
    }
    render(){
        return (
            <div className="detail">
                <img src={this.state.movie.cover && this.state.movie.cover.origin} />
                <h2>影片简介</h2>
                <ul>
                    <li>
                        导演：{this.state.movie.director}
                    </li>
                    <li>
                        主演：{this.state.movie.actors && this.state.movie.actors.map( item => item.name)}
                    </li>
                    <li>
                        地区语言：{this.state.movie.nation}({this.state.movie.language})
                    </li>
                    <li>
                        类型：{this.state.movie.category}
                    </li>
                    <li>
                        上映日期：{this.state.movie.premiereAt}
                    </li>
                </ul>
                <p>{this.state.movie.synopsis}</p>

                <button>立即购票</button>
            </div>
        );
    }
}

import React,{Component} from 'react';
import {Router,Route,hashHistory} from 'react-router';

import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Home from './Home';
import FilmList from './film/FilmList';
import CinemaList from './cinema/CinemaList';
import FilmDetail from './film/Detail';
import CinemaDetail from './cinema/Detail';

//引入全局的css
import "../styles/reset.css";
import "../styles/icon.css";

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            show : false //表示是否显示侧边栏导航
        }
    }
    //切换show的状态值
    toggleSidebar(){
        this.setState({
            show : !this.state.show
        });
    }
    render(){
        return (
            <div>
                <Navbar toggleSidebar={this.toggleSidebar.bind(this)} />
                {this.state.show ? <Sidebar toggleSidebar={this.toggleSidebar.bind(this)} /> : null}
                <Router history = {hashHistory}>
                    <Route path="/" component={Home}></Route>
                    <Route path="/film" component={FilmList}></Route>
                    <Route path="/cinema" component={CinemaList}></Route>
                    <Route path="/filmDetail/:id" component={FilmDetail}></Route>
                    <Route path="/cinemaDetail" component={CinemaDetail}></Route>
                </Router>
            </div>
        );
    }
}

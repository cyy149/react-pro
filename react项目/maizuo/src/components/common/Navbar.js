import React,{Component} from 'react';

import './navbar.less';
export default class Navbar extends Component{
    render(){
        return (
            <header>
                <div className="navbar-left" onClick={() => this.props.toggleSidebar() }>
                    <div className="bar"><i className="iconfont icon-list"></i></div>
                    <h1>橘子电影</h1>
                </div>
                <div className="navbar-right">
                    <div className="city">北京 <i className="iconfont icon-dropdown"></i></div>
                    <div className="user"> <i className="iconfont icon-user"></i></div>
                </div>
            </header>
        );
    }
}

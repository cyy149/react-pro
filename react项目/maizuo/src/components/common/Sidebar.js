import React,{Component} from 'react';
import {hashHistory} from 'react-router';
import './sidebar.less';

export default class Sidebar extends Component{
    direct(path){
        hashHistory.push(path);
        //跳转的同时需要修改sidebar的状态，关掉
        this.props.toggleSidebar();
    }
    render(){
        return (
            <nav onClick={() => this.props.toggleSidebar()}>
                <div className="nav-wrapper" onClick={e => e.stopPropagation()}>
                    <ul>
                        <li onClick={this.direct.bind(this,'/')}><span>首页</span> <i className="iconfont icon-arrow-right"></i></li>
                        <li onClick={this.direct.bind(this,'/film')}><span>影片</span> <i className="iconfont icon-arrow-right"></i></li>
                        <li onClick={this.direct.bind(this,'/cinema')}><span>影院</span> <i className="iconfont icon-arrow-right"></i></li>
                        <li onClick={this.direct.bind(this,'/')}><span>商城</span> <i className="iconfont icon-arrow-right"></i></li>
                        <li onClick={this.direct.bind(this,'/')}><span>我的</span> <i className="iconfont icon-arrow-right"></i></li>
                        <li onClick={this.direct.bind(this,'/')}><span>橘子卡</span> <i className="iconfont icon-arrow-right"></i></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

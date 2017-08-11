import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './carousel.less';

export default class Carousel extends Component{
    render(){
        return (
            <ReactSwipe key={this.props.billboards} className="carousel" swipeOptions={{continuous: true,auto : 2000}}>
                {this.props.billboards.map( (item,index) =>
                    <div key={item.id}>
                        <img src={item.imageUrl} />
                    </div>
                )}
           </ReactSwipe>
        );
    }
}

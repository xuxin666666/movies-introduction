import React from 'react';
import '../css/MovieCharaItem.css';

export default class MovieCharaItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // image: this.props.image,
        }
    }

    render() {
        return <div id="div14">
            <img src={'image/' + this.props.image} alt="" id="img15" />
            <h2>{this.props.name}</h2>
            <p>{this.props.content}</p>
        </div>
    }
}
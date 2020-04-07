import React from 'react'
import '../css/MovieItem.css';


export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        
        const imgsrc = 'image/' + this.props.Image;
        return <div className='box' onClick={this.getDetail} title="Click for details">
            <div id="container">
                <p id="head">{this.props.Head}</p>
                <img src={imgsrc} alt="" id='img'/> 
            </div>
        </div>
    }

    getDetail = () => {
        this.props.history.push('/movie/detail/' + this.props.Id)
    }
}
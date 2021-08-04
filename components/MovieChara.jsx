import React from 'react';
import { Spin, Alert } from 'antd';
import MovieCharaItem from './MovieCharaItem.jsx';


export default class MovieChara extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            moviedetail: []
        }
    }

    componentWillMount() {
        const data = require('../json/moviechara.json');
        setTimeout(() => {
            this.setState({
                moviedetail: data.subjects,
                isLoading: false
            })
        }, 500)
        // fetch('http://localhost:8000/chara')
        // .then(response => response.json())
        // .then(data => {
        //     setTimeout(() => {
        //         this.setState({
        //             isLoading: false,
        //             moviedetail: data
        //         })
        //     }, 500)
        // })
    }

    render() {
        return <div>
            {this.LoadMovieDetail()}
        </div>
    }

    LoadMovieDetail = () => {
        if (this.state.isLoading) {
            return <Spin tip="Loading...">
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                />
            </Spin>
        } else {
            return <div>
                {this.state.moviedetail.map((Item) => {
                    return <MovieCharaItem {...Item}  key={Item.id}></MovieCharaItem>
                })}
            </div>
        }
    }
}
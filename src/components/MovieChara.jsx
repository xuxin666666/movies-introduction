import React from 'react';
import { Spin, Alert } from 'antd';
import MovieCharaItem from './MovieCharaItem.jsx';
import axios from 'axios'


export default class MovieChara extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            moviedetail: []
        }
    }

    async componentDidMount() {
        // const data = require('../json/moviechara.json');
        // setTimeout(() => {
        //     this.setState({
        //         moviedetail: data.subjects,
        //         isLoading: false
        //     })
        // }, 500)
        const {data} = await axios.get('/chara')
        data.forEach(item => {
            for(let i in item){
                item[i.toLowerCase()] = item[i]
                delete item[i]
            }
        })
        this.timer = setTimeout(() => {
            this.setState({
                isLoading: false,
                moviedetail: data
            })
        }, 500)
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
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
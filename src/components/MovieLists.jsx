import React from "react";
import { Spin, Alert } from 'antd';
import { Divider } from 'antd';
import axios from 'axios'
import '../css/MovieLists.css';

export default class MovieLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            moviedetail: {}
        }

    }

    componentDidMount() {
        this.LoadMovieDetail()
    }

    UNSAFE_componentWillReceiveProps() {
        clearTimeout(this.timer)
        this.setState({
            isLoading: true
        }, () => this.LoadMovieDetail())
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }



    render() {
        return <div>
            {this.LandDetails()}
        </div>
    }

    LoadMovieDetail = async () => {
        // const data = require('../json/movieDetail' + window.location.hash.split('/')[3] + '.json')
        // setTimeout(() => {
        //     this.setState({
        //         isLoading: false,
        //         moviedetail: data
        //     })
        // }, 1000)
        const url = '/content/' + window.location.hash.split('/')[3]
        const {data} = await axios.get(url)
        for(let i in data){
            data[i.toLowerCase()] = data[i]
            delete data[i]
        }
        this.timer = setTimeout(() => {
            this.setState({
                isLoading: false,
                moviedetail: JSON.parse(data.data)
            })
        }, 500)
    }

    LandDetails = () => {
        if (this.state.isLoading) {
            return <Spin tip="Loading...">
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                />
            </Spin>
        } else if (window.location.hash.split('/')[3] <= 3) {
            // const data = JSON.parse(this.state.moviedetail)
            const data = this.state.moviedetail
            return <div id="div11">
                <h1 id="h1">{data.head}</h1>
                <div id="div12">
                    <video src={'video/' + data.video} id="video1" controls />
                </div>
                <Divider orientation="left" id="plu1">基本信息</Divider>
                <img src={'image/' + data.image1} alt="" id="img12" />
                {(data.content1 || []).map((e, index) => {
                    return <p key={index}>{e}</p>
                })}
                <img src={'image/' + data.image2} alt="" id="img22" />
                <Divider orientation="left" id="plu1">剧情简介</Divider>
                <img src={'image/' + data.image3} alt="" id="img32" />
                {(data.content2 || []).map((e, index) => {
                    return <p key={index}>{e}</p>
                })}
            </div>
        } else {
            return <div>
                <h2>暂无内容</h2>
            </div>
        }
    }
}

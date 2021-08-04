import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import { AppstoreOutlined, TeamOutlined, CloudOutlined } from '@ant-design/icons';
import MovieLists from './MovieLists.jsx';
import MovieChara from './MovieChara.jsx';
import '../css/MovieDetail.css';


const { Footer, Sider } = Layout;

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            moviedetail: [],
        };
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider id="sider">
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.hash.split('/')[3]]} style={{ paddingTop: 50 }}>
                        <Menu.Item key="0">
                            <CloudOutlined />
                            <Link to='/movie/introduction'>返回介绍页</Link>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <AppstoreOutlined />
                            <Link to='/movie/detail/1'>《魁拔之十万火急》</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <AppstoreOutlined />
                            <Link to='/movie/detail/2'>《魁拔之大战元泱界》</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <AppstoreOutlined />
                            <Link to='/movie/detail/3'>《魁拔之战神崛起》</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <AppstoreOutlined />
                            <Link to='/movie/detail/4'>《魁拔之最后的魁拔》</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <AppstoreOutlined />
                            <Link to='/movie/detail/5'>《魁拔之冲天槊》</Link>
                        </Menu.Item>
                        <Menu.Item key="characters">
                            <TeamOutlined />
                            <Link to="/movie/detail/characters">人物列表</Link>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <div className="site-layout-background" id="content">
                        <Switch>
                            <Route exact path="/movie/detail/characters" component={MovieChara} />
                            <Route exact path="/movie/detail/*" component={MovieLists} />
                        </Switch>
                    </div>
                    <Footer id="footer">MyApp ©2020 Created by FATAL ERROR</Footer>
                </Layout>
            </Layout>
        )
    }
}
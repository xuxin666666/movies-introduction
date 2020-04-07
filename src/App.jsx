import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import MovieIntro from './components/MovieIntro.jsx';
import { Switch } from 'react-router-dom';
import MovieDetail from './components/MovieDetail.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.input = React.createRef();
    }

    componentDidMount(){
        this.check();
    }

    render() {
        return <HashRouter>
            <Link to='/movie/introduction' ref={e => this.input = e}></Link>
            <Switch>
                <Route exact path='/movie/detail/:item' component={MovieDetail}></Route>
                <Route path='/movie/introduction' component={MovieIntro} />
            </Switch>
        </HashRouter>
    }

    check = () => {
        if(window.location.hash === '#/')
            this.input.click();
    }
}


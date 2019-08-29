import React, { Component } from 'react';
import Landing from './Landing';
import LandingUser from './LandingUser';
import Secret from './Secret';
import NotFound from './NotFound';
import Callback from './Callback';
import UserSchedContainer from './UserSchedContainer'
import UserNewsContainer from './UserNewsContainer'
import ScheduleContainer from './ScheduleContainer';
import NewsContainer from './NewsContainer'
document.body.style.backgroundColor = '#00C5FF'


class App extends Component {
    state = {
        key: "",
        location: location.pathname,
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    componentDidUpdate(){
        console.log(this.state)
    }
/* eslint no-restricted-globals: 0*/
    handleKey = async (e) => {
        e.preventDefault();
        if (this.state.key === "1234") {
            this.setState({
                location: '/',
            })
        } else if (this.state.key === '1111') {
            this.setState({
                location: '/landingUser'
            })
        } else {
            this.setState({
                location: '/notFound'
            })
        }
    }



    render() {
        let pageSelection = "/"
        switch(this.state.location) {
            case "/":
                pageSelection = <Landing {...this.props}/>;
                break;
            case "/landingUser":
                pageSelection = <LandingUser {...this.props}/>;
                break;
            case "/secret":
                pageSelection = this.props.auth.isAuth() ? <Secret {...this.props} handleKey={this.handleKey} handleChange={this.handleChange} /> : <NotFound />;
                break;
            case "/callback":
                pageSelection = <Callback />
                break;
            case "/news":
                pageSelection = this.props.auth.isAuth() ? <NewsContainer {...this.props}/> : <NotFound />;
                break;
            case "/usersNews":
                pageSelection = this.props.auth.isAuth() ? <UserNewsContainer {...this.props}/> : <NotFound />;
                break;
            case "/schedule":
                pageSelection = this.props.auth.isAuth() ? <ScheduleContainer {...this.props}/> : <NotFound />;
                break;
            case "/usersSchedule":
                pageSelection = this.props.auth.isAuth() ? <UserSchedContainer {...this.props}/> : <NotFound />;
                break;
            case "/notFound":
                pageSelection = <NotFound />
                break;
            default:
                pageSelection = <NotFound />
        }
        return (
            <div>
                {pageSelection}
            </div>
        );
    }
}

export default App;

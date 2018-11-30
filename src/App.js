import React, { Component } from 'react';
import Landing from './Landing';
import Secret from './Secret';
import NotFound from './NotFound';
import Callback from './Callback';
import News from './News';
import Schedule from './Schedule';

class App extends Component {
    render() {
        let pageSelection = "/"
        switch(this.props.location) {
            case "/":
                pageSelection = <Landing {...this.props}/>;
                break;
            case "/secret":
                pageSelection = this.props.auth.isAuth() ? <Secret {...this.props}/> : <NotFound />;
                break;
            case "/callback":
                pageSelection = <Callback />;
                break;
            case "/news":
                pageSelection = <News {...this.props}/>;
                break;
            case "/schedule":
                pageSelection = <Schedule {...this.props}/>;
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

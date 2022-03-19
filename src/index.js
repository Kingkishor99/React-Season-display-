//import depndences
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



// making react component

class App extends React.Component {

    state = { lat: null, errorMessage: null };


    componentDidMount() {
        //getting location from browser contains two codition position & err
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {

        if (this.state.lat && !this.state.errorMessage) {
            return (<SeasonDisplay lat={this.state.lat} />);
        }

        if (!this.state.lat && this.state.errorMessage) {
            return (<div>{this.state.errorMessage}</div>);

        }

        return (<Spinner message='Please allow access' />);
    }
    //react says you have to define render!!//

    render() {
        return <div>{this.renderContent()}</div>
    }
}









ReactDOM.render(<App />, document.querySelector('#root'));
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {

    /** State initialization - no constructor */
    state = { lat: null, errorMessage: '' };

     /** Success function callback.A call back function is called at some point in the future. */ 
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),   
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated');
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner />;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
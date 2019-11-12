import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props) {
        
        super(props);
        
        /** This is the only time when we do direct assignment to this.state */
        this.state = { lat: null };
        
        window.navigator.geolocation.getCurrentPosition(
            /** success function callback */ 
            position => {
                /** we called setState */
                this.setState({ lat: position.coords.latitude });
                
                /** do not do 
                 * this.state.lat = position.coords.latitude
                */
            },
            /** failure function callback */
            err => console.log(err)
        );
    }

    render() {
        
    return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
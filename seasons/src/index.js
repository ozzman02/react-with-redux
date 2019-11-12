import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props) {
        
        super(props);
        
        /** This is the only time when we do direct assignment to this.state */
        this.state = { lat: null, errorMessage: '' };
        
        window.navigator.geolocation.getCurrentPosition(
            
            /** Success function callback.A call back function is called at some point in the future. 
             *  This function is not going to be executed when the constructor executes but when the 
             *  constructor returns */ 
            position => {
                
                /** we called setState */
                this.setState({ lat: position.coords.latitude });
                
                /** do not do 
                 * this.state.lat = position.coords.latitude
                */
            },
            
            /** Failure function callback */
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br/>
                Error: {this.state.errorMessage}
            </div>
        ); 
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
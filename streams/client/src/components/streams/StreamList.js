import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    /* Render Delete and Edit buttons*/
    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
           return (
               <div className="right floated content">
                   <button className="ui button primary">Edit</button>
                   <button className="ui button negative">Delete</button>
               </div>
           );
        }
    }

    /* Renders create stream button if user is signed in */
    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            );
        }
    }

    /* Renders stream list */
    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }

};

const mapStateToProps = (state) => {
    /*
        With mapStateToProps we can use the streams as a property by using this.props.streams
        We can also reference currentUserId as this.props.currentUserId
        We can also reference isSignedIn as this.props.isSignedIn
    */
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
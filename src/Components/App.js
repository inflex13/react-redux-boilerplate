import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPerson } from '../Actions/people';

class App extends Component {
    componentWillMount() {
        this.props.fetchPerson(1);
    }

    renderPerson() {
        return (
            <h2>{this.props.person.name}</h2>
        );
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <div>
                    {this.renderPerson()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return { person: state.people.person };
}

export default connect(mapStateToProps, { fetchPerson })(App);

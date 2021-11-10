/* One-way data binding example */
import React, { Component } from 'react';

export default class ExampleComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit(event) {
        console.log("Current state is", this.state);
    }

    render() {
        return (<div>
            <input type="text" onChange={this.handleChange} value={this.state.name} />
            <button onClick={this.handleSubmit}>Submit</button>
        </div>);
    }
}
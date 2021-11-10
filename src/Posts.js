import React, { Component } from 'react';
import axios from 'axios';

export default class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let self = this;
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response.data);
                self.setState({
                    posts: response.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    deletePost(id) {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + id).then((response) => {
            console.log('the response is', response);
        }).catch((err) => {
            console.log('The error is', err);
        })
    }

    render() {
        return (
            <div>
                <h1>Posts </h1>
                {this.state.posts.map((state) => <p key={state.id}>{state.id}: {state.title} <button onClick={() => this.deletePost(state.id)}> DELETE</button></p>)}
            </div>
        )
    }
}
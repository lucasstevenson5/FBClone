import React, { Component } from 'react';

class CreatePostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.props.createPost(e, this.state)}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    onChange={this.onChange}
                />
                <input 
                    type="textarea" 
                    name="content" 
                    placeholder="Content" 
                    onChange={this.onChange}
                />
                <input type="submit" value="Post It!" />
            </form>
        )
    }
}

export default CreatePostForm;
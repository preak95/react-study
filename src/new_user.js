import React, { Component } from "react";

class NewUser extends Component {
    state = {
        name: null,
        alias: null
    }

    handleChange = (e) => {
        this.setState({
            // Use 'id' to identify which aspect of state has been changed
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" onChange={this.handleChange}/>

                    <label htmlFor="alias"></label>
                    <input type="text" id="alias" onChange={this.handleChange}/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewUser
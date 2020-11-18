import React,  { Component } from 'react';

class Prtis extends Component {
    render() {
        // Assigns the variabled from props to 
        // the consts of the same name which can then be referenced directly
        const { name, alias } = this.props;
        return(
            <div classname="prtis">
                <p>The prtis@ component</p>
                <p>My name is: {name}</p>
                <p>My alias is: {alias}</p>
            </div>
        )
    }
}

export default Prtis
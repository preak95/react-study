import React,  { Component } from 'react';

class Prtis extends Component {
    render() {
        // Assigns the variabled from props to 
        // the consts of the same name which can then be referenced directly
        const { prtis } = this.props;
        const prtis_list = prtis.map(prtis => {
            return (
                <div className="prtis" key={prtis.alias} >
                    <p>The prtis@ component</p>
                    <p>My name is: { prtis.name }</p>
                    <p>My alias is: { prtis.alias } </p>
                </div>
            )
        })
        // Use the map function to map this array to a new template array
        return(
            <div className='ninja-list'>
                { prtis_list }
            </div>
        )
    }
}

export default Prtis
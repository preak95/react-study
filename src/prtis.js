import React,  { Component } from 'react';

// Deconsutructing props directly in the function argument
const Prtis = ({prtis}) => {
    // Assigns the variabled from props to 
    // the consts of the same name which can then be referenced directly
    const prtis_list = prtis.map(prtis => {
        // Another way to use conditions
        // condition ? (if_true) : (if_false)
        // prtis.alias === 'prtis@' ? <blah_blah> ? null
        if (prtis.alias === 'prtis@') {
            return (
                <div className="prtis" key={prtis.alias} >
                    <p>The prtis@ component</p>
                    <p>My name is: { prtis.name }</p>
                    <p>My alias is: { prtis.alias } </p>
                </div>
            )
        } 
        else{
            return null
        }
    })
    // Use the map function to map this array to a new template array
    console.log(prtis_list);
    return(
        <div className='ninja-list'>
            { prtis_list }
        </div>
    )
}

export default Prtis
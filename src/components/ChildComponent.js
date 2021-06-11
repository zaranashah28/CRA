import React from 'react'

function ChildComponent(props) {
    console.log(props);
    return (
        <div>
        
            <button onClick={() => props.greetHandler('child component')}>Greet Parent Component</button>
        </div>
    )
}

export default ChildComponent

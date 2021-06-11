import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            parentName:'Zarana Shah'
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
        alert(`Button Clicked by  ${this.state.parentName} from ${childName} `  )
        console.log("Button Clicked");
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

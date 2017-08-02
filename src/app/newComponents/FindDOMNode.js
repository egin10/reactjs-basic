import React from 'react';
import ReactDOM from "react-dom";

export class FindDOMNode extends React.Component{
    constructor(){
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    }

    findDomNodeHandler(){
        let myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = "green";
    }

    render(){
        return(
            <div>
                <button onClick={this.findDomNodeHandler} className="btn btn-warning" >FIND DOME NODE</button>
                <div id="myDiv">NODE</div>
            </div>
        );
    }
}
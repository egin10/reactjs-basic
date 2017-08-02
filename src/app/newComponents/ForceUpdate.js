import React from 'react';

export class ForceUpdate extends React.Component{
    constructor(){
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    forceUpdateHandler(){
        this.forceUpdate();
    }

    render(){
        return(
            <div>
                <button onClick={this.forceUpdateHandler} className="btn btn-success" >FORCE UPDATE</button>
                <h4>Random number: {Math.random() * 10}</h4>
            </div>
        );
    }
}
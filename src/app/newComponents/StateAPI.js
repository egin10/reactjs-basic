import React from 'react';

export class StateAPI extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
        this.remStateHandler = this.remStateHandler.bind(this);
    }

    setStateHandler(){
        let item = 'set Items....';
        let myArray = this.state.data;
        myArray.push(item);
        this.setState({
            data: myArray
        });
    }

    remStateHandler(){
        let myArray = this.state.data;
        myArray.pop();
        this.setState({
            data: myArray
        });
    }

    render(){
        return(
            <div>
                <button onClick={this.setStateHandler} className="btn btn-primary" >ADD STATE</button>
                <button onClick={this.remStateHandler} className="btn btn-default" >REMOVE STATE</button>
                <h4>State Array : {this.state.data}</h4>
            </div>
        );
    }
}
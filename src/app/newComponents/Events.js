import React from 'react';

export class Events extends React.Component{
    constructor(){
        super();
        this.state = {
            data: 'initial data...'
        };
        this.updateState = this.updateState.bind(this);
    }

    updateState(){
        this.setState({
            data: 'Data updated from the child component...'
        });
    }

    render(){
        return(
            <div>
                <Content updateStateProp={this.updateState} myDataProp={this.state.data} />
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.updateStateProp} className="btn btn-primary" >CLICK</button>
                <h4>{this.props.myDataProp}</h4>
            </div>
        );
    }
}
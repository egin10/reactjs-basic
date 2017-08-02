import React from 'react';

export class Keys extends React.Component{
    constructor(){
        super();
        this.state={
            data: [
                {
               component: 'First...',
               id: 1
            },
				
            {
               component: 'Second...',
               id: 2
            },
				
            {
               component: 'Third...',
               id: 3
            }
            ]
        }
    }

    render(){
        return(
            <div>
                <div>
                    {this.state.data.map((value, i)=> <Content key={i} componentData={value} />  )}
                </div>
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.componentData.component}</div>
                <div>{this.props.componentData.id}</div>
            </div>
        );
    }
}
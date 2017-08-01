import React from 'react';

import { Content } from './Content';

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: 'Header1',
            content: 'Content1'
        }
    }
    render(){
        return(
            <div>
                <h1>{this.props.headerName}</h1>
                <Content content='Content1' />
                <Content content={this.props.content} />
                <Content content={1+2} />
                <Content />
            </div>
        );
    }
}
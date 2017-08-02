import React from 'react';
import { render } from 'react-dom';

import { Header } from './newComponents/Header';
import { Content } from './newComponents/Content';
import { TableRow } from './newComponents/TableRow';
import { StateAPI } from "./newComponents/StateAPI";
import { ForceUpdate } from "./newComponents/ForceUpdate";
import { FindDOMNode } from "./newComponents/FindDOMNode";
import { Form } from "./newComponents/Form";
import { Events } from "./newComponents/Events";
import { Refs } from "./newComponents/Refs";
import { Keys } from "./newComponents/Keys";

class App extends React.Component{
    constructor() {
      super();
		
      this.state = {
         data: [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
        ],
        header: 'Header1',
        content: 'Content2'
      }
    }

    render(){
        return(
            <div className="container">
                <Header headerName={this.state.header} content={this.state.content} />
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
                    </tbody>                
                </table>
                <br/>
                <StateAPI/>
                <ForceUpdate/>
                <FindDOMNode/>
                <br/>
                <Form/>
                <br/>
                <Events/>
                <Refs/>
                <br/>
                <Keys/>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));
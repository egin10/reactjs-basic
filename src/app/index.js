import React from 'react';
import { render } from 'react-dom';

import { Header } from './newComponents/Header';
import { Content } from './newComponents/Content';
import { TableRow } from './newComponents/TableRow';

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
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));
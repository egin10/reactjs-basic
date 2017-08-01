import React from 'react';

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        }
        setTimeout(()=>{
            this.setState({status: 1});
        }, 2000);
        console.log('Constructor');
    }

    componentWillMount(){
        console.log("Component Will Mount");
    }

    componentDidMount(){
        console.log("Component Did Mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Should Component Update", nextProps, nextState);
        return true;
    }

    componentWillupdate(nextProps, nextState){
        console.log("Component Will Update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component Did Update", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        });
    }

    render(){
        return(
            <div>
                <p>In a new Component!</p>
                <p>Your Name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status : {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-default">Greet</button>
                <hr/>
                <input type="text" 
                    value={this.state.homeLink} 
                    onChange={event => {this.onHandleChange(event)}}
                    />
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header</button>
            </div>
        );
    }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
};
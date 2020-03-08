import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: null,
            sections: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.setState({ title: this.props.title, sections: this.props.sections },
            function () { console.log('Header', this.state.sections); }.bind(this));
    }
    handleClick(){
        this.setState({title: 'Hola'},
            function(){ 
                console.log(this.state.title)
                this.props.updateWea(this.state.title)
            })
        
    }
    render() {
        return (
            <div id="Header">
                <h1>{this.state.title}</h1>
                <button onClick={this.handleClick}>Activate Lasers</button>
            </div>
        );
    }
}
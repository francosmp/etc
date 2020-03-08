import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: null,
            sections: []
        }
        this.updateWea = this.updateWea.bind(this);
    }
    componentDidMount() {
        this.setState({ title: this.props.title, sections: this.props.sections },
            function () { console.log('Main', this.state.sections); }.bind(this));
    }
    updateWea(data){
        this.setState({
            title: data
        })
    }
    render() {
        return (
            <div id="Main">
                <h1>{this.state.title}</h1>
                <Header title={this.props.title}
                    sections={this.props.sections} updateWea={this.updateWea}/>
                <Body />
                <Footer />
            </div>
        )
    }
};
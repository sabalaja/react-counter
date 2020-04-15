import React, { Component } from 'react';
import ButtonsPanel from './ButtonsPanel';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue
        }
    }
    addCounter = () => {
        this.setState(prevState => {
            return ({ counterValue: prevState.counterValue + 1 })
            // return({counterValue: ++prevState.counterValue }) 
        });
    }


    resetOrSetZero = (reset) => {
        if (reset) {
            this.setState({ counterValue: this.props.initValue })
        } else {
            this.setState({ counterValue: 0 });
        };
    };


    render() {
        return (
            <div className="react-counter">
                Licznik: {this.state.counterValue}
                <ButtonsPanel addValue={this.addCounter} resetSet={this.resetOrSetZero} />
            </div>
        );
    }
};

export default Counter;
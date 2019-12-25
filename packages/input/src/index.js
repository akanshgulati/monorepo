import React from 'react';
import Button from "@ixi-ui/input/src";

export default class Input extends React.Component {

    constructor(props) {
        super(props);
        this.primary = this.props.primary === true;
    }

    render() {
        if (this.primary) {
            return <input name={this.props.name} title={this.props.title} className={"primary"}/>
        } else {
            return <input name={this.props.name} title={this.props.title}/>
        }
    }
}
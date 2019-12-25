import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.name = props.name;
    }

    render() {
        return (
            <button className={"button"}>{this.props.children}</button>
        );
    }
}
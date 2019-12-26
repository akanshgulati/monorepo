import React from 'react';
import PropTypes from 'prop-types'


export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.name = props.name;
    }

    render() {
        return (
            <button className={"button"} 
                    onClick={(e) => {this.props.onClick(e)}} {...this.props}>{this.props.children}</button>
        );
    }
}
Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
};
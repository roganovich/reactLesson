import React from "react";
import classes from "./Btn.module.css";

class EmptyBtn extends React.Component {

    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.class = this.props.class;
    }

    render() {
        return (
            <button className={this.class}>{this.title}</button>
        )
    }
}

export default EmptyBtn;
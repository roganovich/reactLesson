import React from "react";
import classes from "./BestInput.module.css";

class BestInput extends React.Component {

    constructor(props) {
        super(props);

        this.placeholder = this.props.placeholder;
        this.class = this.props.class;
        this.type = this.props.type;
        this.name = this.props.name;
        this.value = this.props.value;
        this.onChange = this.props.onChange;
    }


    render() {
        return (
            <div className={classes[this.class]}>
                <input onChange={this.onChange} name={this.name} type={this.type} defaultValue={this.value} placeholder={this.placeholder} />
            </div>
        )
    }
}

export default BestInput;
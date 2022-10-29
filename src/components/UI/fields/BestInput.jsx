import React from "react";
import classes from "./BestInput.module.css";

class BestInput extends React.Component {

    constructor(props) {
        super(props);

        this.class = this.props.class;
        this.title = this.props.title;
        this.type = this.props.type;
        this.name = this.props.name;
        this.value = this.props.value;
        this.onChange = this.props.onChange;
        this.htmlFor = 'formControl' + this.name;
    }


    render() {
        return (
            <div className={this.class}>
                <label htmlFor={this.htmlFor} className="form-label">{this.title}</label>
                <input className={`form-control`} onChange={this.onChange} name={this.name} type={this.type} defaultValue={this.value} placeholder={this.title} />
            </div>
        )
    }
}

export default BestInput;
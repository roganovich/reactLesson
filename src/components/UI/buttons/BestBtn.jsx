import React from "react";
import classes from "./BestBtn.module.css";

class BestBtn extends React.Component {

    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.class = this.props.class;
        this.id = this.props.id;
        /** Получаем CallBack функцию */
        this.onClick = this.props.onClick;
    }

    render() {
        return (
            <div className={classes[this.class]}>
                <button data-id={this.id} onClick={this.onClick}>{this.title}</button>
            </div>
        )
    }
}

export default BestBtn;
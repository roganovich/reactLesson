import React from "react";
import classes from "./Btn.module.css";

class HandleBtn extends React.Component {

    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.class = this.props.class;
        this.item = this.props.item;
        /** Получаем CallBack функцию */
        this.handleClick = this.props.handleClick;
    }

    render() {
        return (
            <div className={classes[this.class]}>
                <button onClick={() =>this.handleClick(this.item)}>{this.title}</button>
            </div>
        )
    }
}

export default HandleBtn;
import React from "react";

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
            <button className={this.class} onClick={() =>this.handleClick(this.item)}>{this.title}</button>
        )
    }
}

export default HandleBtn;
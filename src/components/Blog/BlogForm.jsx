import React from "react";
import BestInput from "../UI/fields/BestInput";
import BestBtn from "../UI/buttons/BestBtn";

class BlogForm extends React.Component {

    constructor(props) {
        super(props);
        /** Состояние */
        this.state = {
            title: '1',
            body: '2',
        };
        /** Получаем CallBack функцию */
        this.createPost = this.props.createPost;
        /** Биндим */
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Изменение в полях формы
     */
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    /**
     * При сохранении формы педелаем даныне в CallBack функцию
     */
    handleSubmit(event) {
        this.createPost({'title': this.state.title, 'body': this.state.body});
        event.preventDefault();
    }

    render() {
        return (
            <form className="post_form" onSubmit={this.handleSubmit}>
                <BestInput onChange={this.handleChange.bind(this)} value={this.state.title} name="title" type="text"
                           placeholder="Название поста" class="post_add"/>
                <BestInput onChange={this.handleChange.bind(this)} value={this.state.body} name="body" type="text"
                           placeholder="Описание поста" class="post_add"/>
                <BestBtn title="Добавить" class="post_add"/>
            </form>
        )
    }
}

export default BlogForm;
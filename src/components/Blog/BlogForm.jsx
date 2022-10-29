import React from "react";
import BestInput from "../UI/fields/BestInput";
import EmptyBtn from "../UI/buttons/EmptyBtn";

class BlogForm extends React.Component {

    constructor(props) {
        super(props);
        /** Состояние */
        this.state = {
            title: 'Название',
            body: 'Содержимое',
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
            <div className={'bd-example'}>
                <form className="form" onSubmit={this.handleSubmit}>
                    <BestInput onChange={this.handleChange} value={this.state.title} name="title" type="text"
                               title="Название поста" class="mb-3"/>
                    <BestInput onChange={this.handleChange} value={this.state.body} name="body" type="text"
                               title="Описание поста" class="mb-3"/>

                    <EmptyBtn title="Добавить" class="btn btn-primary"/>
                </form>
            </div>
        )
    }
}

export default BlogForm;
import React from "react";
import BestBtn from "../UI/buttons/BestBtn";

class BlogItem extends React.Component {
    constructor(props) {
        super(props);
        this.post = this.props.post
        /** Получаем CallBack функцию */
        this.deletePost = this.props.deletePost
        /** Биндим */
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * При нажатии кнопки передаем ключ в CallBack функцию
     */
    handleClick(event) {
        const post_id = event.target.getAttribute('data-id');
        this.deletePost(post_id);
    }

    render() {
        return (
            <div className="post_item" key={this.post.id}>
                <h2 className="post_item_name">
                    {this.post.id} {this.post.title}
                </h2>
                <div>{this.post.body}</div>
                <BestBtn id={this.post.id} onClick={this.handleClick} title="Удалить" class="post_delete"/>
            </div>
        )
    }
}

export default BlogItem
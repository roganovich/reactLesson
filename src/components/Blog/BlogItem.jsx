import React from "react";
import HandleBtn from "../UI/buttons/HandleBtn";

class BlogItem extends React.Component {
    constructor(props) {
        super(props);
        this.post = this.props.post
        /** Получаем CallBack функцию */
        this.deletePost = this.props.deletePost
    }

    render() {
        return (
            <li className="list-group-item d-flex justify-content-between"  key={this.post.id}>
                <div className="post_item_name">{this.post.id}</div>
                <div>{this.post.title}</div>
                <div>{this.post.body}</div>
                <HandleBtn item={this.post} handleClick={this.deletePost} title="Удалить" class="btn btn-danger"/>
            </li>
        )
    }
}

export default BlogItem
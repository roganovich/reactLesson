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
            <div className="post_item" key={this.post.id}>
                <h2 className="post_item_name">
                    {this.post.id} {this.post.title}
                </h2>
                <div>{this.post.body}</div>
                <HandleBtn item={this.post} handleClick={this.deletePost} title="Удалить" class="post_delete"/>
            </div>
        )
    }
}

export default BlogItem
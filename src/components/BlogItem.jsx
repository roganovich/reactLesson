import React from "react";

class BlogItem extends React.Component {

    render() {
        return (
            <div className="post_item">
                <h2 className="post_item_name">
                    {this.props.title}
                </h2>
                <div className="item_body">
                    {this.props.body}
                </div>
                <div className="post_btn">
                    <button>Удалить</button>
                </div>
            </div>
        )
    }
}

export default BlogItem
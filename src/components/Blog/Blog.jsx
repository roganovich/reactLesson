import React from "react";
import BlogForm from "./BlogForm";
import BlogItem from "./BlogItem";

class Blog extends React.Component {

    constructor(props) {
        super(props);
        /** Посты по умолчанию */
        const posts = [
            {id: 1, title: "First", body: "Text Text Text Text Text Text Text"},
            {id: 2, title: "Second", body: "Text Text Text Text Text Text Text"},
            {id: 3, title: "Third", body: "Text Text Text Text Text Text Text"}
        ];
        /** Название блока */
        this.title = this.props.title;
        /** Состояние */
        this.state = {
            posts: posts,
        };
        /** Биндим */
        this.createPost = this.createPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    /**
     * CallBack функция на добавление поста из формы
     */
    createPost(new_post) {
        /** Находим последний ИД поста */
        const last_id = Math.max.apply(null, this.state.posts.map((post) => post.id));
        /** ИД нового поста */
        new_post.id = last_id != '-Infinity' ? last_id + 1 : 1;
        this.setState({posts: this.state.posts.concat(new_post)})
    }

    /**
     * CallBack функция на удаления поста из формы
     */
    deletePost(post) {
        this.setState({
                posts: this.state.posts.filter(p => p.id !== post.id)
            }
        )
    }

    render() {
        return (
            <div className="post">
                <h2>{this.title}</h2>
                <BlogForm createPost={this.createPost}/>
                {this.state.posts.length !== 0
                    ? this.state.posts.map(post => <BlogItem deletePost={this.deletePost} key={post.id} post={post}/>)
                    : <div>Empty List</div>
                }
            </div>
        )
    }
}

export default Blog
import React from 'react';
import BlogForm from './BlogForm';
import BlogItem from './BlogItem';
import RadioList from "../UI/fields/RadioList";

class Blog extends React.Component {

    constructor(props) {
        super(props);
        /** Посты по умолчанию */
        const posts = [
            {id: 1, title: 'First', body: 'Text Text Text Text Text Text Text'},
            {id: 2, title: 'Second', body: 'Text Text Text Text Text Text Text'},
            {id: 3, title: 'Third', body: 'Text Text Text Text Text Text Text'}
        ];

        this.filtersOptions = [
            {value: 'id', text: 'По ID'},
            {value: 'title', text: 'По названию'},
            {value: 'body', text: 'По содержимому'},
        ];

        /** Название блока */
        this.title = this.props.title;
        /** Состояние */
        this.state = {
            posts: posts,
            sort: 'id',
        };
        /** Биндим */
        this.createPost = this.createPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.changeSort = this.changeSort.bind(this);
        this.filterPosts = this.filterPosts.bind(this);
    }

    filterPosts(field) {
        const posts = this.state.posts;
        const new_posts = posts.sort((a, b) => {
            return a[field].toString().localeCompare(b[field].toString())
        });
        this.setState({
            posts: new_posts
        })
    }

    /**
     * CallBack функция на добавление поста из формы
     */
    createPost(new_post) {
        /** Находим последний ИД поста */
        const last_id = Math.max.apply(null, this.state.posts.map((post) => post.id));
        /** ИД нового поста */
        new_post.id = last_id !== '-Infinity' ? last_id + 1 : 1;
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

    /**
     * Изменяем состояние фильтра
     **/
    changeSort(field) {
        this.setState({sort: field});
        this.filterPosts(field);
    }

    render() {
        return (
            <div className='posts w-25 p-3'>
                <BlogForm createPost={this.createPost}/>
                <hr/>
                <RadioList options={this.filtersOptions} name="sort" title="Сортировка" value={this.state.sort}
                           changeValue={this.changeSort}/>
                <hr/>
                <h2>{this.title}</h2>
                <ul className='list-group'>
                    {this.state.posts.length !== 0
                        ? this.state.posts.map(post => <BlogItem deletePost={this.deletePost} key={post.id}
                                                                 post={post}/>)
                        : <li className='list-group-item'>Empty List</li>
                    }
                </ul>
            </div>
        )
    }
}

export default Blog
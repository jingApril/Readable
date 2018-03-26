import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addPost, deletePost } from '../actions'
import Modal from 'react-modal'
import Loading from 'react-loading'
import AddPost from './AddPost'
import PostList from './PostList'
import DeletePost from './DeletePost'

class App extends Component {
  render() {
    return (
        <div>
            <header>
                <h1 className="display-2">Readable 评论页面</h1></header>
            <hr className="side" />
            <main role="main" className="container">
                <div className="my-3 p-3 bg-white rounded box-shadow">
                    <div className="row border-bottom border-gray pb-2 mb-0">
                        <div className="col-sm-4">
                            <h6>Recent updates</h6></div>
                        <div className="col-sm-8 d-flex flex-row-reverse">
                            <div className="p-2"><a href="#" className="text-primary">Kat4</a></div>
                            <div className="p-2"><a href="#" className="text-primary">Kat3</a></div>
                            <div className="p-2"><a href="#" className="text-primary">Kat2</a></div>
                            <div className="p-2"><a href="#" className="text-primary">Kat1</a></div>
                            <div className="p-2">All Category</div>
                        </div>
                    </div>
                    <PostList />
                </div>
                <div className="row d-flex flex-row-reverse">
                    <div className="dropdown mr-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Recent Post
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Ordered By Vote</a>
                            <a className="dropdown-item" href="#">Ordered By Time</a>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        Create New Post
                    </button>
                </div>
            </main>

        </div>
            )
    }
}

export default App;

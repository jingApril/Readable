import React from 'react'
import { connect } from 'react-redux'

import { fetchPost, fetchPostsSuccess, fetchPostsFailure } from '../actions'
import Modal from 'react-modal'
import Loading from 'react-loading'

import PostList from './PostList'
import NewPost from './NewPost'
import DeletePost from './DeletePost'
import PostDetail from './PostDetail'

class App extends React.Component {
    state = {
        postModalOpen: false,
        deletePostModalOpen: false
	}

    openNewPostModal = () => {
		this.setState(() => ({postModalOpen: true}))

	}
	closeNewPostModal = () => {
		this.setState(() => ({postModalOpen: false}))
	}

    openDeletePostModal = () => {
		this.setState(() => ({deletePostModalOpen: true}))

	}
    closeDeletePostModal = () => {
        this.setState(() => ({deletePostModalOpen: false}))

    }

  render() {
    const {postModalOpen, deletePostModalOpen} = this.state
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

            <Modal className='modal' overlayClassName='overlay' isOpen={postModalOpen} onRequestClose={this.closePostModal} contentLabel='Modal'>

                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Create a new post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="clearfix">
                                    <div className="form-group">
                                        <label for="title">Title</label>
                                        <input type="text" className="form-control" id="title" placeholder="Title" ref={(input) => this.input = input}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="author">Author</label>
                                        <input type="text" className="form-control" id="author" placeholder="Your name" ref={(input) => this.input = input}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="author">Category</label>
                                        <select className="form-control" id="category">
                                            <option>Kat1</option>
                                            <option>Kat2</option>
                                            <option>Kat3</option>
                                            <option>Kat4</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="content">Content</label>
                                        <textarea className="form-control" id="content" rows="3"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={this.submitPost}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>

        </div>
            )
    }
}

function mapStateToProps(state) {
    const {post} = state
	return {
		post
	}
}

function mapDispatchToProps(dispatch) {
	return {
		newPost: (data) => dispatch(addPost(data)),
		removePost: (data) => dispatch(deletePost(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

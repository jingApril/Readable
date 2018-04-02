import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Route,Link } from 'react-router-dom'
import {fetchAllCategories,fetchPostsByCat,fetchAllPosts} from '../actions'

import Modal from 'react-modal'
import Loading from 'react-loading'
import PostList from './PostList'
import NewPost from './NewPost'
// import DeletePost from './DeletePost'
// import PostDetail from './PostDetail'


class App extends React.Component {

    state = {
        createPostModal: false,
        isEditing: false,
        deletePostModal: false,
        category: null
    }

    componentDidMount() {
        this.props.fetchCatList(),
        this.props.fetchAllPostsList(),
        this.props.fetchPostsByCatList()
    }

    openNewPostModal = () => {
		this.setState(() => ({createPostModal: true}))

	}
	closeNewPostModal = () => {
		this.setState(() => ({createPostModal: false}))
	}
    componentWillMount() {
        Modal.setAppElement('body');
    }

    openDeletePostModal = () => {
		this.setState(() => ({deletePostModal: true}))

	}
    closeDeletePostModal = () => {
        this.setState(() => ({deletePostModal: false}))

    }

  render() {

    const {catList, allPostsList,postsByCatList} = this.props
    const {createPostModal}= this.state
    return (
          <div>

              <header>
                  <Link to='/'><h1 className="display-2">Readable 评论页面</h1></Link>
              </header>
              <hr className="side" />
              <main role="main" className="container">
                  <div className="my-3 p-3 bg-white rounded box-shadow">
                      <div className="row border-bottom border-gray pb-2 mb-0">
                          <div className="col-sm-4">
                              <h6>Recent updates</h6>
                          </div>
                          <div className="col-sm-8 d-flex flex-row-reverse">

                              {
                                  catList.map((cat) => (
                                      <div className="p-2" key={cat.name}>
                                          <Link to={cat.path} className="text-primary">{cat.name}</Link>
                                      </div>
                                  ))
                              }
                          </div>
                      </div>
                      <PostList posts={allPostsList}/>
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
                      <button  type="button" className="btn btn-primary" onClick={this.openNewPostModal}>
                          Create New Post
                      </button>

                  </div>
              </main>

              <Modal className="Modal"  overlayClassName="Overlay" isOpen={createPostModal}  onRequestClose={this.closeNewPostModal}  contentLabel='Post Modal'>
                  <NewPost onClick={this.closeNewPostModal} />
              </Modal>
              
          </div>
        )
    }
}

const mapStateToProps = ({categories, allposts, postsByCat}) => ({
    catList: categories,
    allPostsList: allposts,
    postsByCatList: postsByCat
})

const mapDispatchToProps = (dispatch) => ({
    fetchCatList: () => dispatch(fetchAllCategories()),
    fetchAllPostsList: () => dispatch(fetchAllPosts()),
    fetchPostsByCatList: () => dispatch(fetchPostsByCat('react'))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

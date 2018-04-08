import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
<<<<<<< HEAD
import {Switch, Route, Link, withRouter} from 'react-router-dom'
=======
//import { Route,Link } from 'react-router-dom'
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import {fetchAllCategories, fetchPostsByCat, fetchAllPosts} from '../actions'

>>>>>>> ca7c20edac9926a0abb3c6a2d4649cfe79a6b28e
import Modal from 'react-modal'
import Loading from 'react-loading'

import Cat from './Cat'
import Posts from './Posts'
import NewPost from './NewPost'
import Post from './Post'

class App extends React.Component {

<<<<<<< HEAD
  //state = {
    //createPostModal: false,
    // isEditing: false,
    // deletePostModal: false,
    // category: null,
    // activePost: {}
  //}



  // fetchPostDetail = (id) => {
  //   //id.preventDefault()
  //   API.fetchPost(id).then((activePost) => this.setState(() => ({activePost})))
  //
  // }

  // componentDidMount() {
  //   this.props.fetchCatList(),
  //   this.props.fetchAllPostsList(),
  //   this.props.fetchPostsByCatList()
  // }
  //



  // componentWillMount() {
  //   Modal.setAppElement('body');
  // }
  //
  // openDeletePostModal = () => {
  //   this.setState(() => ({deletePostModal: true}))
  //
  // }
  // closeDeletePostModal = () => {
  //   this.setState(() => ({deletePostModal: false}))
  //
  // }

  render() {

    // const {catList, allPostsList, postsByCatList} = this.props
    // const {createPostModal, activePost} = this.state

    return (
      <div>

          <Cat />

      </div>
  )
  }
}

// const mapStateToProps = ({
//   categories,
//   allposts,
//   postsByCat,
//   activePost}) => ({
//     catList: categories,
//     allPostsList: allposts,
//     postsByCatList: postsByCat,
//     activePost: activePost
//   })
//
// const mapDispatchToProps = (dispatch) => ({
//   fetchCatList: () => dispatch(fetchAllCategories()),
//   fetchAllPostsList: () => dispatch(fetchAllPosts()),
//   fetchPostsByCatList: (cat) => dispatch(fetchPostsByCat(cat)),
//   fetchPostDetail: (id) => dispatch(fetchPost(id))
// })

export default App;
//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
=======
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

    const {catList, allPostsList, postsByCatList} = this.props
    const {createPostModal} = this.state

    const Home = () => (<div>
      <header>
        <h1 className="display-2">Readable 评论页面</h1>
      </header>
      <hr className="side"/>
      <main role="main" className="container">
        <div className="my-3 p-3 bg-white rounded box-shadow">
          <div className="row border-bottom border-gray pb-2 mb-0">
            <div className="col-sm-4">
              <h6>Recent updates</h6>
            </div>
            <div className="col-sm-8 d-flex flex-row-reverse">

              {
                catList.map((cat) => (<div className="p-2" key={cat.name}>
                  <Link to={cat.path} className="text-primary">{cat.name}</Link>
                </div>))
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

          <Link to='/addpost'>
            <button type="button" className="btn btn-primary">
              Create New Post
            </button>
          </Link>

          {/* onClick={this.openNewPostModal} */}

        </div>
      </main>
    </div>)
    return (<div>
      {/* <Modal className="Modal"  overlayClassName="Overlay" isOpen={createPostModal}  onRequestClose={this.closeNewPostModal}  contentLabel='Post Modal'>
                  <NewPost modelClose={this.closeNewPostModal} />
              </Modal> */
      }
      <Switch>
        <Route exact="exact" path='/' component={Home}/>
        <Route path='/addpost' render={({history}) => (<NewPost modelClose={() => {
              this.closeNewPostModal()
              history.push('/addpost')
            }}/>)}/>
      </Switch>
    </div>)
  }
}

const mapStateToProps = ({categories, allposts, postsByCat}) => ({catList: categories, allPostsList: allposts, postsByCatList: postsByCat})

const mapDispatchToProps = (dispatch) => ({
  fetchCatList: () => dispatch(fetchAllCategories()),
  fetchAllPostsList: () => dispatch(fetchAllPosts()),
  fetchPostsByCatList: () => dispatch(fetchPostsByCat('react'))
})

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
>>>>>>> ca7c20edac9926a0abb3c6a2d4649cfe79a6b28e

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import Modal from 'react-modal'
import Loading from 'react-loading'

import Cat from './Cat'
import Posts from './Posts'
import NewPost from './NewPost'
import Post from './Post'


class App extends React.Component {

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

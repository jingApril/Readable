import React, {Component} from 'react'
import {Switch, Route, Link, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import uuidv1 from 'uuid/v1'
import {getAllCategories, addPost, getPosts} from '../actions'
import Modal from 'react-modal'

class NewPost extends React.Component {

  // state = {
  // 	title: '',
  // 	body: '',
  // 	author: '',
  // 	category: '',
  // 	invalid: false,
  // 	success: false,
  // 	modalIsOpen: false
  // };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
      category: '',
      invalid: false,
      success: false,
      modalIsOpen: false
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleCatChang = this.handleCatChange.bind(this);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.resetPost = this.resetPost.bind(this);

  }

  componentDidMount() {
    this.props.getAllCategories();
    Modal.setAppElement('body');
  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value});
  }

  handleUserChange = (e) => {
    this.setState({author: e.target.value});
  }

  handleCatChange = (e) => {
    this.setState({category: e.target.value});
  }

  handlePostChange = (e) => {
    this.setState({body: e.target.value});
  }

  handleSubmit = (e) => {
    //e.preventDefault();
    if (this.state.title && this.state.category && this.state.author && this.state.body) {
      // const post = JSON.stringify({
      // 	title: this.state.title,
      // 	author: this.state.author,
      // 	body: this.state.body,
      // 	id: uuidv1(),
      // 	deleted: false,
      // 	category: this.state.category,
      // 	timestamp: Date.now()
      // });
      const newpost = {
        title: this.state.title,
        author: this.state.author,
        body: this.state.body,
        id: uuidv1(),
        deleted: false,
        category: this.state.category,
        timestamp: Date.now()
      }
       console.log(newpost)
      //this.props.savePost(post)
      this.props.savePost(newpost).then(() => this.setState({
        success: true,
        title: '',
        author: '',
        category: '',
        body: '',
        invalid: false
      }))
      //console.log(post)
      //this.openModal();

    } else {
      this.setState({invalid: true, success: false})
    }

  }
  resetPost = () => {
    this.setState({
      success: false,
      title: '',
      author: '',
      category: '',
      body: '',
      invalid: false
    });
  }
  render() {
    if (this.state.success) {
      return (<div>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">add post is successfully</h5>
              <button type="button" className="close" onClick={this.props.modalClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" id="post-form">
              great!
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" onClick={this.props.modalClose}>submit is success</button>
            </div>
          </div>
        </div>
      </div>)
    } else {
      return (<div>

        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Create a new post</h5>
              <button type="button" className="close" onClick={this.props.modalClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body" id="post-form">
              <form className="clearfix">
                <div className="form-group">
                  <label for="title">Title</label>
                  <input type="text" className="form-control" id="title" placeholder="Title" value={this.state.value} onChange={this.handleTitleChange}/>
                </div>
                <div className="form-group">
                  <label for="author">Author</label>
                  <input type="text" className="form-control" id="author" placeholder="Your name" value={this.state.value} onChange={this.handleUserChange}/>
                </div>
                <div className="form-group">
                  <label for="author">Category</label>
                  <select className="form-control" id="category" value={this.state.value} onChange={this.handleCatChange}>
                    <option>react</option>
                    <option>redux</option>
                    <option>udacity</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="content">Content</label>
                  <textarea className="form-control" id="content" rows="3" value={this.state.value} onChange={this.handlePostChange}></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-dismiss="modal" >Cancel</button> */}

              <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>

        </div>

      </div>)
    }
  }
}

function mapStateToProps(categories) {
  return categories
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCategories: () => dispatch(getAllCategories()),
    savePost: (newpost) => dispatch(addPost(newpost))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPost));

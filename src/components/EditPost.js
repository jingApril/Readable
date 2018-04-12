import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Modal from 'react-modal'
import {getAllCategories, getOnePost, editPost} from '../actions'

class EditPost extends Component {

  state = {
    id: '',
    title: '',
    author: '',
    body: '',
    category: '',
    invalid: false,
    success: false,
    edited: false,
    modalIsOpen: false
  }

  componentDidMount() {
    this.props.getAllCategories();
    const {id} = this.props.match.params;
    this.props.getOnePost(id)
  }

  componentWillReceiveProps(nextProps) {
    // Set the local state after post details are loaded
    const {id, title, body} = nextProps.getOnePost;
    this.setState({id, title, body});
  }

  onTitleChange(title) {
    this.setState({title: title.target.value})
  }

  onAuthorChange(author) {
    this.setState({author: author.target.value})
  }

  onCategoryChange(category) {
    this.setState({category: category.target.value})
  }

  onBodyChange(text) {
    this.setState({body: text.target.value})
    console.log(this.state.body)
  }

  onPostClick(e) {
    e.preventDefault();
    if (this.state.title && this.state.category && this.state.author && this.state.body) {

      this.props.editPost(this.state.id, {
        title: this.state.title,
        author: this.state.author,
        category: this.state.category,
        body: this.state.body
      }).then(() => this.setState({success: true, invalid: false}))
      this.openModal();
    } else {
      this.setState({invalid: true, success: false})
    }
  }

  openModal = this.openModal.bind(this);
  closeModal = this.closeModal.bind(this);

  openModal() {
    this.setState({modalIsOpen: true});

  }
  closeModal() {
    this.setState({modalIsOpen: false});

  }

  render() {
    const categories = this.props.categories || [];
    const listOpt = categories.map(cat => <option value={cat.name} key={cat.path}>{cat.name}</option>)
    return (

  <div className="my-3 p-3 bg-white rounded box-shadow clearfix">
        <Modal isOpen={this.state.modalIsOpen} closeTimeoutMS={4} onRequestClose={this.closeModal} className="modal-success" contentLabel="Modal">
          <i className="fa fa-check"></i>
          <h1>Hooray!</h1>
          <p>Your post has been successfully modified</p>
          <button className="close-modal" onClick={this.closeModal}>
            X
          </button>
        </Modal>

      <div>
        {this.state.invalid && (<h3>Please enter all values...</h3>)}
      </div>

      <form>
        <div className="form-group">
          <div className="form-group">
            <label>Title
            </label>
            <input type="text" className="form-control" id="title" placeholder="Title"
            value={this.state.title} onChange={(e) => this.onTitleChange(e)}/>

          </div>
        </div>
        <div className="form-group">
          <label>Author</label>
          <input type="text" className="form-control" id="author" placeholder="Your name"    value={this.state.author} onChange={(e) => this.onAuthorChange(e)} />

        </div>
        <div className="form-group">
          <label>Category</label>
          <select className="form-control" id="category" value={this.state.category} onChange={(e) => this.onCategoryChange(e)}>
            {/* <option>react</option>
            <option>redux</option>
            <option>udacity</option> */}
            {listOpt}
          </select>
        </div>
        <div className="form-group">
          <label>Content
          </label>
          <textarea className="form-control" id="content" rows="3" value={this.state.body} onChange={(e) => this.onBodyChange(e)}></textarea>

        </div>
        <button type="submit" className="btn btn-primary" onClick={this.onPostClick.bind(this)}>Submit</button>
      </form>

    </div>)
  }
}

function mapStateToProps({categories, post}) {
  return {categories, post}
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCategories: () => dispatch(getAllCategories()),
    getOnePost: (id) => dispatch(getOnePost(id)),
    editPost: (id, post) => dispatch(editPost(id, post))
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPost));

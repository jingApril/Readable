import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import uuidv1 from 'uuid/v1'
import Modal from 'react-modal'
import {withRouter, Link} from 'react-router-dom'
import {getOnePost, addComment} from '../actions'

class AddComment extends React.Component {

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getOnePost(id);
    Modal.setAppElement('body');
  }

  state = {
    author: '',
    body: '',
    invalid: false,
    success: false,
    modalIsOpen: false
  }

  onChangeAuthor(author) {
    this.setState({author: author.target.value})
  }

  onChangeComment(body) {
    this.setState({body: body.target.value})
  }

  openModal = this.openModal.bind(this);
	closeModal = this.closeModal.bind(this);

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  onChangeAddComment() {

      if (this.state.author && this.state.body) {
          const newcomment = {
            id: uuidv1(),
            timestamp: Date.now(),
            author: this.state.author,
            body: this.state.body,
            parentId: this.props.post.id
          }

          this.props.saveComment(newcomment).then(() => {
            this.setState({success: true, author: '', body: '', invalid: false})
          })

        this.openModal();
      } else {
        this.setState({invalid: true, success: false})
      }

  }


  render() {
    return (<div>

      <h3 className="pb-2 mb-1 pt-4 text-primary">Add your comment</h3>
      <div id="readerCommentsCommand" className="post-comment-form clearfix">
        <div className="bogr1 comment-form" id="ext-gen8">
          <input name="ieutf" type="hidden" value="☠"/>
          <input type="hidden" id="formAssetId" value="5516983"/>
          <a name="addComment"></a>
          <div id="readerCommentsCommand-message-field" className="textarea-holder field cleared">
            <span className="errors"></span>
            <textarea id="message" name="message" className="maxlength js-validate js-countdown js-defaultvalue js-expand textarea-input" rows="5" cols="40" title="Enter your comment" value={this.state.body} onChange={(e) => this.onChangeComment(e)}>Enter your comment</textarea>
          </div>
          <div>
            <label for="auther">Auther:</label>
            <input id="auther" name="auther" type="text" value={this.state.author} onChange={(e) => this.onChangeAuthor(e)}/>
          </div>
          <div className="buttons-holder" id="ext-gen9">
            <button type="submit" className="btn btn-submit btn-disabled" id="ext-gen10" disabled="" onClick={this.onChangeAddComment.bind(this)}>Submit Comment</button>
            <button type="reset" className="btn btn-clear" id="ext-gen11">Clear</button>
          </div>
        </div>
      </div>      
      <Modal isOpen={this.state.modalIsOpen} closeTimeoutMS={4} onRequestClose={this.closeModal} className='Modal' contentLabel="Modal">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">New Comment</h5>
              <button type="button" className="close" onClick={this.closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" id="post-form">
              <p>Your comment has been successfully added</p>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" onClick={this.closeModal}>submit is success</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>)
  }

}

function mapStateToProps(post) {
  return post
}

function mapDispatchToProps(dispatch) {
  return {
    saveComment: (newcomment) => dispatch(addComment(newcomment)),
    getOnePost: (post) => dispatch(getOnePost(post))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddComment));

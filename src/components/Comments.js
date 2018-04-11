import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import Modal from 'react-modal'
import {withRouter, Link} from 'react-router-dom'
import {
  getComments,
  upVoteComment,
  downVoteComment,
  addComment,
  editComment,
  deleteComment,
  getOnePost
} from '../actions'
import AddComment from './AddComment'

class Comments extends React.Component {

  state = {
    invalid: false,
    success: false,
    modalIsOpen: false
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getComments(id);
    this.props.deleteComment(id);
    this.props.editCurrentComment(id, comment);
  }



  onClickUpVote = (id) => {
 		this.props.upVote(id)
 	}

 	onClickDownVote = (id) => {
 		this.props.downVote(id)
 	}



  onClickCommentEdit = (id) => {
    		const comments = this.props.comments;
    		let comment = comments.filter(comment => comment.id === id);
    		this.openModal();
    		this.setState({
    			author: comment[0].author,
    			body: comment[0].body,
    			commentId: id
    		})
    	}

      onChangeAuthor(author) {
        this.setState({author: author.target.value})
      }

      onChangeComment(body) {
        this.setState({body: body.target.value})
      }


   	onSaveComment(id){
   		if(this.state.author && this.state.body){
   			const commentEdit = {
   				id,
   				parentId: this.props.match.params.id,
    				timestamp: Date.now(),
    				author: this.state.author,
    				body: this.state.body
    			}
    			this.props.editCurrentComment(id, commentEdit)
    			.then(() => this.setState({
  	          success: true,
  	          invalid: false
  	        }))
  	        this.closeModal();
    		} else {
  	      this.setState({
  	        invalid: true,
  	        success: false
  	      })
  	   	}
   	}

   	onClickDeleteComment(id){
   		deleteComment(id);
   	 let comments = Object.keys(this.props.comments).map((data)=>(this.props.comments[data] || []));
   		this.props.deleteComment(id);
   	}

  render() {
    let comments = Object.keys(this.props.comments).map((data) => (this.props.comments[data] || []));
    //	const  {comments} = this.props;
    {
      console.log(comments)
    }
    //const {comments} = this.props;
    // let commentsNum = comments.length;

    return (<div>
      <div className="row">
        <div className="col-sm-12">
          <h3 className="pb-2 mb-0 pt-3 text-primary">Comments</h3>
        </div>
      </div>
      <ul class="list-unstyled">
        {
          comments.map((comment) => <li className="row text-muted pt-3 border-bottom border-gray" key={comment.id}>>
            <div className="row comment_body">
              <div className="col-12">
                <p className="media-body pb-3 mb-0 lh-125">
                  {comment.body}
                </p>
              </div>
            </div>
            <div className="row comment_detail">
              <div className="col-4" id="title_item_left">
                <div className="d-inline p-2 text-gray-dark">{comment.author}</div>
                |
                <time datetime="2016-02-25T19:19:31.193Z">
                  {moment(comment.timestamp).format("MMM-DD-YYYY hh:mma")}</time>
                |
                <div className="d-inline p-2 text-gray-dark">{comment.voteScore}</div>
              </div>
              <div className="col-8 d-flex flex-row-reverse" id="title_item_right">

              <i className="material-icons" onClick={() => this.onClickUpVote(comment.id)}>thumb_up</i>
							<div className="d-inline p-2 text-dark">
								{comment.voteScore}
							</div>
							<i className="material-icons" onClick={() => this.onClickDownVote(comment.id)}>thumb_down</i>

                <div className="d-inline p-2 text-dark delete" data-toggle="modal" data-target="#pop_delete" onClick={() => this.onClickDeleteComment(comment.id)}>
Delete
                </div>
                <div className="d-inline p-2 text-dark edit" onClick={() => this.onClickCommentEdit(comment.id)}>
              Edit
                </div>
              </div>
            </div>
          </li>)
        }
      </ul>
<AddComment />


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


{/* <Modal
				isOpen={this.state.modalIsOpen}
				onRequestClose={this.closeModal}
					  className="modal-edit"
					  contentLabel="Modal">
					  <h3> Edit your comment</h3>
					  <form>
					<input type="text" placeholder="Name"
					className="author" value={this.state.author}
					onChange={(e) => this.onAuthorChange(e)}/>
					<textarea className="commentarea"
					placeholder="Your comment..." value={this.state.body}
					onChange={(e) => this.onCommentChange(e)}></textarea>
				</form>
				<div type="button" onClick={(e) => this.onSaveComment(this.state.commentId)}
				className="changes-button">Save changes</div>
				<button className="close-modal" onClick={this.closeModal}> X </button>
				</Modal> */}

    </div>)
  }
}

function mapStateToProps(comments) {
  return comments
}

function mapDispatchToProps(dispatch) {
  return {
		addComment: (comment) => dispatch(addComment(comment)),
    getComments: (id) => dispatch(getComments(id)),
    upVote: (id) => dispatch(upVoteComment(id)),
    downVote: (id) => dispatch(downVoteComment(id)),
    editCurrentComment: (id, comment) => dispatch(editComment(id, comment)),
    deleteComment: (id) => dispatch(deleteComment(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));

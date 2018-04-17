import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import Modal from "react-modal";
import { withRouter } from "react-router-dom";
import {
  getComments,
  upVoteComment,
  downVoteComment,
  addComment,
  editComment,
  deleteComment
} from "../actions";
import AddComment from "./AddComment";

class Comments extends React.Component {
  state = {
    author: "",
    body: "",
    commentId: "",
    invalid: false,
    success: false,
    deleted: false,
    edited: false,
    modalIsOpen: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getComments(id);
    //const comments = this.props.comments;
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  onClickUpVote = id => {
    this.props.upVote(id);
  };

  onClickDownVote = id => {
    this.props.downVote(id);
  };

  onChangeAuthor(author) {
    this.setState({
      author: author.target.value
    });
  }

  onChangeComment(body) {
    this.setState({
      body: body.target.value
    });
  }

  onClickCommentEdit = (id) => {
    const comments = this.props.comments;
	console.log(comments);
    let comment = comments.filter(comment => comment.id === id);
    this.openModal();
    this.setState({
      author: comment[0].author,
      body: comment[0].body,
      commentId: id
    });
  };

  editCommentOnClick(commentId) {
	//e.preventDefault();
    if (this.state.author && this.state.body) {
      const commentEdit = {
        id:commentId,
        parentId: this.props.match.params.id,
        timestamp: Date.now(),
        author: this.state.author,
        body: this.state.body
      };
      this.props.editComment(commentId, commentEdit).then(() =>
        this.setState({
          success: true,
          invalid: false
        })
      );
     this.closeModal();
    } else {
      this.setState({
        invalid: true,
        success: false
      });
    }
  }

  onClickDeleteComment(id) {
    //deleteComment(id);
    let comments = Object.keys(this.props.comments).map(
      data => this.props.comments[data] || []
    );
    this.props.deleteComment(id);
  }

  render() {
    let comments = Object.keys(this.props.comments).map(
      data => this.props.comments[data] || []
    );
    //	const  {comments} = this.props;
    // {
    // 	console.log(comments)
    // }
    //const {comments} = this.props;
    // let commentsNum = comments.length;

    return (
      <div className="col-12">
		  <div className="mx-2">
			  <h3 className="pb-2 pt-3 text-primary">Comments</h3>
		  </div>
		  <ul className="list-group">
			  {comments.map(comment => (
				  <li
					  className="row pt-3 border-bottom border-gray mx-3"
					  key={comment.id}
      >
					  <div className="row comment_body">
						  <div className="col-12 comment-text">
							  <p className="pb-3 mb-0 lh-125">{comment.body}</p>
						  </div>
					  </div>
					  <div className="row comment_detail">
						  <div className="col-4" id="title_item_left">
							  <div className="d-inline p-2 text-gray-dark">
								  {comment.author}
							  </div>|
							  <time>
								  {moment(comment.timestamp).format("MMM-DD-YYYY hh:mma")}
							  </time>|
							  <div className="d-inline p-2 text-gray-dark">
								  {comment.voteScore} vote
							  </div>
						  </div>
						  <div
							  className="col-8 d-flex flex-row-reverse"
							  id="title_item_right"
						  >
							  <i
								  className="material-icons"
								  onClick={() => this.onClickUpVote(comment.id)}
							  >
								  thumb_up
							  </i>
							  <div className="d-inline p-2 text-dark">
								  {comment.voteScore}
							  </div>
							  <i
								  className="material-icons"
								  onClick={() => this.onClickDownVote(comment.id)}
							  >
								  thumb_down
							  </i>
							  <div
								  className="d-inline p-2 delete text-primary"
								  data-toggle="modal"
								  data-target="#pop_delete"
								  onClick={() => this.onClickDeleteComment(comment.id)}
							  >
								  Delete
							  </div>
							  <div
								  className="d-inline p-2 edit text-primary"
								  onClick={() => this.onClickCommentEdit(comment.id)}
							  >
								  Edit
							  </div>
						  </div>
					  </div>
				  </li>
			  ))}
		  </ul>
		  <AddComment />
		  <Modal
			  isOpen={this.state.modalIsOpen}
			  closeTimeoutMS={4}
			  className="Modal"
			  onRequestClose={this.closeModal}
		  >
			  <div className="modal-dialog modal-dialog-centered" role="document">
				  <div className="modal-content">
					  <div className="modal-header">
						  <h5 className="modal-title" id="exampleModalLongTitle">
							  New Comment
						  </h5>
						  <button
							  type="button"
							  className="close"
							  onClick={this.closeModal}
						  >
							  <span aria-hidden="true">&times;</span>
						  </button>
					  </div>
					  <div className="modal-body" id="post-form">
						  <form className="clearfix">
							  <div className="form-group">
								  <label>author:</label>
								  <input
									  type="text"
									  className="form-control"
									  id="title"
									  disabled
									  // value={this.state.author}
									  // onChange={e => this.onChangeAuthor(e)}
								  />
							  </div>

							  <div className="form-group">
								  <label>Content:</label>
								  <textarea
									  className="form-control"
									  id="content"
									  rows="3"
									  value={this.state.body}
									  onChange={e => this.onChangeComment(e)}
								  />
							  </div>
						  </form>
					  </div>
					  <div className="modal-footer">
						  <button
							  type="submit"
							  className="btn btn-primary"
							  onClick={e => this.editCommentOnClick(this.state.commentId)}
						  >
							  submit
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.closeModal}
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(comments) {
  return comments;
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: comment => dispatch(addComment(comment)),
    getComments: id => dispatch(getComments(id)),
    upVote: id => dispatch(upVoteComment(id)),
    downVote: id => dispatch(downVoteComment(id)),
    editComment: (id, comment) => dispatch(editComment(id, comment)),
    deleteComment: id => dispatch(deleteComment(id))
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Comments)
);

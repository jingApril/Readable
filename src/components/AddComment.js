import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import uuidv1 from "uuid/v1";
import Modal from "react-modal";
import { withRouter, Link } from "react-router-dom";
import { getOnePost, addComment } from "../actions";

class AddComment extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getOnePost(id);
    Modal.setAppElement("body");
  }

  state = {
    author: "",
    body: "",
    invalid: false,
    success: false,
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onChangeAuthor = author => {
    this.setState({ author: author.target.value });
  };

  onChangeComment = body => {
    this.setState({ body: body.target.value });
  };

  onChangeAddComment = e => {
    e.preventDefault();
    if (this.state.author && this.state.body) {
      const newcomment = {
        id: uuidv1(),
        timestamp: Date.now(),
        author: this.state.author,
        body: this.state.body,
        parentId: this.props.post.id
      };

      this.props.saveComment(newcomment).then(() => {
        this.setState({ success: true, author: "", body: "", invalid: false });
      });

      this.openModal();
    } else {
      this.setState({ invalid: true, success: false });
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h3 className="pb-2 mb-1 pt-4 text-primary">Add your comment</h3>
        </div>
        <form className="col-12 px-5">
          <div className="form-group">
            <label className="text-gray-dark">Example textarea:</label>
            <textarea
              className="form-control"
              title="comment-body"
              id="comment-body"
              rows="5"
              cols="40"
              value={this.state.body}
              onChange={e => this.onChangeComment(e)}
            >
              Enter your comment
            </textarea>
          </div>
          <div className="form-group">
            <label className="text-gray-dark">Auther:</label>
            <input
              type="text"
              className="form-control"
              id="auther"
              name="auther"
              value={this.state.author}
              onChange={e => this.onChangeAuthor(e)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={this.onChangeAddComment}
          >
            Submit
          </button>
        </form>

        <Modal
          isOpen={this.state.modalIsOpen}
          closeTimeoutMS={4}
          onRequestClose={this.closeModal}
          className="Modal"
          contentLabel="Modal"
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
                <p>Your comment has been successfully added</p>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.closeModal}
                >
                  submit is success
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(post) {
  return post;
}

function mapDispatchToProps(dispatch) {
  return {
    saveComment: newcomment => dispatch(addComment(newcomment)),
    getOnePost: post => dispatch(getOnePost(post))
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddComment)
);

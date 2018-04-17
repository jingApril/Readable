import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import {
  getOnePost,
  upVotePost,
  downVotePost,
  deletePost
} from "../actions";

class PostVote extends React.Component {
  state = {
    deleted: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getOnePost(id);
    console.log(this.props);
  }

  onClickUpVote = id => {
    this.props.upVote(id);
  };

  onClickDownVote = id => {
    this.props.downVote(id);
  };

  onClickDelete = id => {
    this.props.deletePost(id).then(() => {
      this.setState({
        deleted: true
      });
    });
  };

  render() {
    {
      console.log(this.props.post);
    }
    let post = this.props.post || [];
    if (this.state.deleted) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="col-sm-6 d-flex flex-row-reverse" id="title_item_right">
          <i
            className="material-icons"
            onClick={() => this.onClickUpVote(post.id)}
          >
            thumb_up
          </i>
          <div className="d-inline p-2 text-dark">{post.voteScore}</div>
          <i
            className="material-icons"
            onClick={() => this.onClickDownVote(post.id)}
          >
            thumb_down
          </i>

          <div
            className="d-inline p-2 edit"
            data-toggle="modal"
            data-target="#pop_delete"
          >
            <Link to={`/edit/${post.id}`}>Edit</Link>
          </div>

          <div
            className="d-inline p-2 text-primary delete"
            id="deletePost"
            data-toggle="modal"
            data-target="#pop_delete"
            onClick={() => this.onClickDelete(post.id)}
          >
            Delete
          </div>

          <div className="d-inline p-2">
            <Link to={`/${post.category}`}>
              <div className="category">{post.category}</div>
            </Link>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(post) {
  return post;
}

function mapDispatchToProps(dispatch) {
  return {
    getOnePost: id => dispatch(getOnePost(id)),
    upVote: id => dispatch(upVotePost(id)),
    downVote: id => dispatch(downVotePost(id)),
    deletePost: id => dispatch(deletePost(id))
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostVote)
);

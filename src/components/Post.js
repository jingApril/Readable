import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { withRouter, Link } from "react-router-dom";
import {
  getOnePost,
  getPosts,
  getPostsbyCategory,
  upVotePost,
  downVotePost,
  editPost,
  deletePost,
  changeSort
} from "../actions";
import Comments from "./Comments";
import PostVote from "./PostVote";
import NotFound from "./NotFound";

class Post extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getOnePost(id);
  }

  render() {
    let post = this.props.post || [];
    if (Object.keys(post).length) {
      return (
        <div className="row bg-white rounded box-shadow clearfix">
          <div className="col-12 ml-auto mt-2">
            <Link to="/">
              <button type="button" id="new-post" className="btn btn-primary">
                go back
              </button>
            </Link>
          </div>
          <div className="col-12 mx-3 post_detail_top">
            <h3 className="mt-0">{post.title}</h3>
            <div
              className="row border-bottom border-gray py-2 text-primary"
              id="title_item_left"
            >
              <div className="col-sm-6">
                <div className="d-inline p-2">{post.author}</div>|
                <time className="d-inline p-2">
                  {moment(post.timestamp).format("MMM-DD-YYYY hh:mma")}
                </time>|
                <Link to={`/${post.category}`}>
                  <div className="d-inline p-2">{post.category}</div>
                </Link>|
                <div className="d-inline p-2">
                  {post.voteScore}
                  Vote
                </div>
              </div>

              <PostVote />
            </div>
            <div className="col-12 w-100 p-3">{post.body}</div>
          </div>
          <Comments />
        </div>
      );
    } else {
      return <NotFound />;
    }
  }
}

function mapStateToProps(post) {
  return  post;
}

function mapDispatchToProps(dispatch) {
  return {

    getOnePost: id => dispatch(getOnePost(id)),
    upVote: id => dispatch(upVotePost(id)),
    downVote: id => dispatch(downVotePost(id)),
    deletePost: id => dispatch(deletePost(id))
  };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));

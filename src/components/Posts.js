import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import moment from 'moment'
import PropTypes from "prop-types"
import _ from 'lodash'
import {
  getPosts,
  getPostsbyCategory,
  upVotePost,
  downVotePost,
  editPost,
  deletePost,
  Post,
  changeSort
} from '../actions'

class Posts extends React.Component {

  componentDidMount() {
    this.props.getPosts();
    const {category} = this.props.match.params;
    // this.props.getPostsbyCategory(category);
    // console.log(category);
  }

  currentCategoryRoute() {
    const {category} = this.props.match.params;
    return category;
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
  }

  onClickDelete = (id) => {
    this.props.deletePost(id).then(() => {})
  }

  onChangeSort = (e) => {
    this.props.changeSort(e.target.value);

  }



  // const PostList = ({ posts, filter }) => {
  //
  //     let allPosts = (filter === 'all') ? posts : posts.filter(post => post.category === filter)
  //
  //     const renderPostList = allPosts.map(post => <Post key={post.id} post={post} />)
  //
  //     return  PostList
  // }

  render() {


    const categoryRoute = this.currentCategoryRoute();
    let posts = Object.keys(this.props.posts).map((data) => (this.props.posts[data] || []))
    //console.log(posts);
    if (categoryRoute) {
      posts = posts.filter(post => post.category === categoryRoute);
    }

if (this.props.sort.sort === 'latest') {
   posts = _.orderBy(posts, ['timestamp'], ['desc'])
}

if (this.props.sort.sort === 'popularity') {
  posts = _.orderBy(posts, ['voteScore'], ['desc'])
}



    return (
<div className="my-3 p-3 bg-white rounded box-shadow clearfix">

      <div className="row">
        {
          posts.map((post) => (<div className="title_item text-muted pt-3 border-bottom border-gray" key={post.id}>
            <Link to={`/${post.category}/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <div className="row">
              <div className="col-sm-8 float-left" id="title_item_left">
                <div className="d-inline p-2 text-dark">{post.author}</div>
                <time>{moment(post.timestamp).format("MMM-DD-YYYY hh:mma")}
                </time>
                <div className="d-inline p-2 text-dark">{post.commentCount}
                  条评论
                </div>

              </div>

              <div className="col-sm-4 d-flex flex-row-reverse" id="title_item_right">

                <i className="material-icons" onClick={() => this.onClickUpVote(post.id)}>thumb_up</i>
                <div className="d-inline p-2 text-dark">
                  {post.voteScore}
                </div>
                <i className="material-icons" onClick={() => this.onClickDownVote(post.id)}>thumb_down</i>

                <div className="d-inline p-2 text-dark delete" id="deletePost" data-toggle="modal" data-target="#pop_delete">
                  <Link to={`/edit/${post.id}`}>
                    Edit
                  </Link>
                </div>

                <div className="d-inline p-2 text-dark delete" id="deletePost" data-toggle="modal" data-target="#pop_delete" onClick={() => this.onClickDelete(post.id)}>
                  Delete
                </div>

                <div className="d-inline p-2 text-dark">
                  <Link to={`/${post.category}`}>
                    <div className="category">{post.category}</div>
                  </Link>
                </div>

              </div>

            </div>
          </div>))
        }

      </div>
      <div className="row d-flex flex-row-reverse">
        <div className="dropdown mr-3">
          {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
            Recent Post
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
            <option className="dropdown-item" value="vote">Ordered By Vote</option>
            <option className="dropdown-item" value="time">Ordered By Time</option>
          </div> */}

          {/* <select lassName="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" onChange={this.onChangeSort}>
              <option className="dropdown-item" value="vote">Ordered By Vote</option>
    					<option className="dropdown-item" value="time">Ordered By Time</option>

            </div>

				</select> */}

    <select  className="form-control" name="sort" onChange={this.onChangeSort}>
      <option value="latest">Ordered By Time</option>
      <option  value="popularity">Ordered By Vote</option>
    </select>
        </div>
      </div>
    </div>)

  }

}

function mapStateToProps({posts, sort}) {
  return {posts, sort}
}

//
// function mapStateToProps ({ posts }) {
//     return {
//         posts : posts,
//        posts.sort
//     }
// }
function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPosts()),
    getPostsbyCategory: (category) => dispatch(getPostsbyCategory(category)),
    upVote: (id) => dispatch(upVotePost(id)),
    downVote: (id) => dispatch(downVotePost(id)),
    changeSort: (value) => dispatch(changeSort(value)),
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PropTypes from "prop-types"
import {getPosts, getPostsbyCategory,upVotePost,downVotePost,editPost,deletePost} from '../actions'

class Posts extends React.Component {

	componentDidMount() {
		this.props.getPosts();
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

		const categoryRoute = this.currentCategoryRoute();
		let posts = Object.keys(this.props.posts).map((data) => (this.props.posts[data] || []))
		//console.log(posts);
		if (categoryRoute) {
			posts = posts.filter(post => post.category === categoryRoute);
		}

		if (this.props.sort === 'not_popular') {
			posts.sort(function(a, b) {
				return a.voteScore - b.voteScore
			});
		}

		if (this.props.sort === 'popular') {
			posts.sort(function(a, b) {
				return b.voteScore - a.voteScore
			});
		}

		if (this.props.sort === 'time') {
			posts.sort(function(a, b) {
				return b.timestamp - a.timestamp
			});
		}
	}
	render() {

		{
			console.log(this.props.posts)
		};
		const {posts} = this.props;

		return (<div className="row">
			{
				posts.map((post) => (<div className="title_item text-muted pt-3 border-bottom border-gray" key={post.id}>
					<Link to={"posts" + post.id}>
						<h3>{post.title}</h3>
					</Link>
					<div className="row">
						<div className="col-sm-8 float-left" id="title_item_left">
							<div className="d-inline p-2 text-dark">{post.author}</div>
							<time datetime="2016-02-25T19:19:31.193Z">{post.timestamp}</time>
							<div className="d-inline p-2 text-dark">{post.commentCount}
							条评论</div>

						</div>

						<div className="col-sm-4 d-flex flex-row-reverse" id="title_item_right">


							<i class="material-icons" onClick={() => this.onClickUpVote(post.id)}>thumb_up</i>
							<div className="d-inline p-2 text-dark">
								{post.voteScore}
							</div>
							<i class="material-icons" onClick={() => this.onClickDownVote(post.id)}>thumb_down</i>

							<div className="d-inline p-2 text-dark delete" id="deletePost" data-toggle="modal"   data-target="#pop_delete"onClick={() => this.onClickDelete(post.id)}>
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

		</div>)

	}

}

function mapStateToProps({posts}) {
	return {posts}
}

function mapDispatchToProps(dispatch) {
	return {
		getPosts: () => dispatch(getPosts()),
		getPostsbyCategory: (category) => dispatch(getPostsbyCategory(category)),
		upVote: (id) => dispatch(upVotePost(id)),
		downVote: (id) => dispatch(downVotePost(id)),
		//changeSort: (value) => dispatch(changeSort(value)),
		deletePost: (id) => dispatch(deletePost(id))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));

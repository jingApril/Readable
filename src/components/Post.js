import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {withRouter, Link} from 'react-router-dom'
import {getOnePost} from '../actions'
import Comments from './Comments'

class Post extends React.Component {

	componentDidMount() {
		const {id} = this.props.match.params;
    this.props.getOnePost(id);
	}
	// const Child = ({ match }) => (
	//   <div>
	//     <h3>ID: {match.params.id}</h3>
	//
	//   </div>
	// );

	render() {
		const {post} = this.props;
		// if (!post) {
		// 	return <div>Loading...</div>
		// }
		//let {post} = this.props.post;


		return (<div>


				<div className="media post_detail_top">
					<div className="media-body">
						<h3 className="mt-0">{post.title}</h3>
						<div className="col-sm-12 border-bottom border-gray" id="title_item_left">
							<div className="d-inline p-2 text-dark">{post.author}</div>|
							<time datetime="2016-02-25T19:19:31.193Z">{moment(post.timestamp).format("MMM-DD-YYYY hh:mma")}</time>|
							<div className="d-inline p-2 text-dark">{post.category}
							</div>|
							<div className="d-inline p-2 text-dark">{post.voteScore}
								Vote</div>
								<div className="d-inline p-2 text-dark delete float-right" data-toggle="modal" data-target="#pop_delete">
									<a href="javascript:void(0);">Delete Post
									</a>
								</div>
								<div className="d-inline p-2 text-dark float-right">
									<a href="javascript:;">Edit Post</a>
								</div>
						</div>
						<p className="post_detail_p">
							{post.body}</p>
					</div>
				</div>
				<Comments />

			<div className="row">
				<Link to='/'>
					<button type="button" id="new-post" classNameName="btn btn-primary">
						返回
					</button>
				</Link>
			</div>
		</div>)
	}
}

function mapStateToProps(post) {
	return post
}

export default withRouter(connect(mapStateToProps, {getOnePost})(Post));

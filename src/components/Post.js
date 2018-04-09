import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {getOnePost} from '../actions'
// import Comments from './Comments'

class Post extends React.Component {

	componentDidMount() {
		const {id} = this.props.match.params;
		this.props.getOnePost(id);
	}

	render() {
		const {post} = this.props.activePost;
		// if (!post) {
		// 	return <div>Loading...</div>
		// }
		{console.log(1111)}
		return (<div>
			<header>
				<h1 class="display-2">Readable- Post detail</h1>
			</header>
			<hr class="side"/>
			<main role="main" class="container">
				<div class="my-3 p-3 bg-white rounded box-shadow">
					<div class="media post_detail_top">
						<div class="media-body">
							<h3 class="mt-0">{post.title}</h3>
							<div class="col-sm-12" id="title_item_left">
								<div class="d-inline p-2 text-dark">{post.author}</div>|
								<time datetime="2016-02-25T19:19:31.193Z">{post.author}</time>|
								<div class="d-inline p-2 text-dark">{post.categoryr}
								</div>|
								<div class="d-inline p-2 text-dark">{post.voteScore}
									Vote</div>
							</div>
							<p class="post_detail_p">
								{post.body}</p>
						</div>
					</div>
					<div class="row border-bottom border-gray" style="border-bottom-width: 1em;">
						<div class="col-sm-12">
							<div class="d-inline p-2 text-dark delete float-right" data-toggle="modal" data-target="#pop_delete">
								<a href="javascript:void(0);">Delete Post
								</a>
							</div>
							<div class="d-inline p-2 text-dark float-right">
								<a href="javascript:;">Edit Post</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>)
	}

}

function mapStateToProps({post}) {
	return post
}

export default withRouter(connect(mapStateToProps, {getOnePost})(Post));

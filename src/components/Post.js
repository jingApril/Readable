import React from 'react'
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

	render() {
		const {post} = this.props;

		return (<div className="row bg-white rounded box-shadow clearfix">
			<div className="ml-auto mt-2">
				<Link to='/'>
					<button type="button" id="new-post" className="btn btn-primary">
						go back
					</button>
				</Link>
			</div>
			<div className="row mx-3 post_detail_top">

				<h3 className="mt-0">{post.title}</h3>
				<div className="col-12 border-bottom border-gray py-2 text-primary" id="title_item_left">
					<div className="d-inline p-2">{post.author}</div>|
					<time className="d-inline p-2">{moment(post.timestamp).format("MMM-DD-YYYY hh:mma")}</time>|
					<Link to={`/${post.category}`}>
						<div className="d-inline p-2">{post.category}</div>
					</Link>|
					<div className="d-inline p-2">{post.voteScore}
                    Vote</div>
				</div>
				<div className="col-12 w-100 p-3">
					{post.body}
				</div>
			</div>
			<Comments/>
        </div>)
	}
}

function mapStateToProps(post) {
	return post
}

export default withRouter(connect(mapStateToProps, {getOnePost})(Post));

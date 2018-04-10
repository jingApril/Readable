import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {withRouter, Link} from 'react-router-dom'
import {getComments,upVoteComment,downVoteComment,addComment,editComment,deleteComment} from '../actions'

class Comment extends React.Component {

	componentDidMount() {
		const {id} = this.props.match.params;
		this.props.getComments(id);
	}

	state = {
  		author: '',
  		body: '',
  		commentId: '',
  		invalid: false,
  		success: false,
  		deleted: false,
  		edited: false,
  		modalIsOpen: false
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

		onAuthorChange(author){
	 		this.setState({author: author.target.value})
	 	}

	 	onCommentChange(text){
	 		this.setState({body: text.target.value})

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

	 	onClickDeleteCom(id){
	 		deleteComment(id);
	 		//let comments = Object.keys(this.props.comments).map((data)=>(this.props.comments[data] || []));
	 		this.props.deleteComment(id);

	 	}


	render() {

		let comments = Object.keys(this.props.comments).map((data)=>(this.props.comments[data] || []));
		let commentsNum = comments.length;
		return (
			<div>



				<div className="row">
				<div className="col-sm-12">
					<h3 className="pb-2 mb-0 pt-3 text-primary">Comments</h3>
				</div>
			   </div>
			   <div className="media text-muted pt-3 border-bottom border-gray">
{comments.map((comment) =>

				<div className="row" key={comment.id}>
					<div className="col-md-12">
						<p className="media-body pb-3 mb-0 lh-125">
							{comment.body}
						</p>
					</div>
					<div className="col-md-12 post_detail_bottom">
						<div className="col-sm-8 float-left" id="title_item_left">
							<div className="d-inline p-2 text-gray-dark">{comment.author}</div>
							|
							<time datetime="2016-02-25T19:19:31.193Z">	{moment(comment.timestamp).format("MMM-DD-YYYY hh:mma")}</time>
							|
							<div className="d-inline p-2 text-gray-dark">{comment.voteScore}</div>
						</div>
						<div className="col-sm-4 d-flex flex-row-reverse" id="title_item_right">
							<div className="d-inline p-2 text-dark delete" data-toggle="modal" data-target="#pop_delete">
								<a href="javascript:void(0);">Delete</a>
							</div>
							<div className="d-inline p-2 text-dark">
								<a href="javascript:;">Edit</a>
							</div>
						</div>
					</div>
				</div>

	)}
			   </div>

			</div>

		)
	}
}

function mapStateToProps({comments}){
	return {
		comments
	}
}

function mapDispatchToProps(dispatch){
    return {
    	getComments: (id) => dispatch(getComments(id)),
        upVote: (id) => dispatch(upVoteComment(id)),
        downVote: (id) => dispatch(downVoteComment(id)),
        editCurrentComment: (id, comment) => dispatch(editComment(id, comment)),
        deleteComment: (id) => dispatch(deleteComment(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment));

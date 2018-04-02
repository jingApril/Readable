import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

export default class NewPost extends React.Component {

	constructor() {
		super();
		this.state = {
			title: '',
			body : '',
			author: '',
			category:''
		};
	}

	handlePostChange = (e) => {
		this.setState({
			title: e.target.value,
			body : e.target.value,
			author: e.target.value,
			category: e.target.value
		});
	}

	handlePostSubmit= (e) => {
		e.preventDefault();
		console.log(this.state.title)
	}

	// componentDidMount = () => {
	// 	const {post} = this.props
	// 	this.setState({
	// 		postForm: {
	// 			title: post.title,
	// 			body: post.body,
	// 			author: post.author,
	// 			category: post.category
	// 		}
	// 	})
	// }

	render(){
		return (
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLongTitle">Create a new post</h5>
						<button type="button" className="close" onClick={props.closeNewPostModal}>

							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form className="clearfix" onSubmit={this.handlePosSubmit}>
							<div className="form-group">
								<label for="title">Title</label>
								<input type="text" className="form-control" id="title" placeholder="Title"	ref={Title => this.title = Title} />
							</div>
							<div className="form-group">
								<label for="author">Author</label>
								<input type="text" className="form-control" id="author" placeholder="Your name" ref={Author => this.author = Author}/>
							</div>
							<div className="form-group">
								<label for="author">Category</label>
								<select className="form-control" id="category" ref={Category => this.category = Category}>
									<option>Kat1</option>
									<option>Kat2</option>
									<option>Kat3</option>
									<option>Kat4</option>
								</select>
							</div>
							<div className="form-group">
								<label for="content">Content</label>
								<textarea className="form-control" id="content" rows="3"></textarea>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-primary">Submit</button>
					</div>
				</div>
			</div>
		)
	}
}

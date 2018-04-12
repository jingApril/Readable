import React, {Component} from 'react'
import {Switch, Route, Link, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import uuidv1 from 'uuid/v1'
import {
	getAllCategories,
	addPost,
	getPosts} from '../actions'
import Modal from 'react-modal'

class AddPost extends React.Component {

	state = {
		title: '',
		body: '',
		author: '',
		category: '',
		invalid: false,
		success: false,
		modalIsOpen: false
	};

	componentDidMount() {
		this.props.getAllCategories();
		Modal.setAppElement('body');
	}

	openModal = () => {
		this.setState({modalIsOpen: true});
	}

	closeModal = () => {
		this.setState({modalIsOpen: false});
	}
	tobackClick = () => {
          this.props.history.push("/");
    }




	onChangeTitle = (title) => {
		this.setState({title: title.target.value})
	}

	onChangeAuthor = (author) => {
		this.setState({author: author.target.value})
	}

	onChangeCategory = (category) => {
		this.setState({category: category.target.value})
	}

	onChangeBody = (body) => {
		this.setState({body: body.target.value})
	}




	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.title && this.state.category && this.state.author && this.state.body) {
			const newpost = {
				title: this.state.title,
				author: this.state.author,
				body: this.state.body,
				id: uuidv1(),
				deleted: false,
				category: this.state.category,
				timestamp: Date.now()
			}
			console.log(newpost)
			// this.props.savePost(post)
			this.props.savePost(newpost).then(() => this.setState({
				success: true,
				title: '',
				author: '',
				category: '',
				body: '',
				invalid: false

			}))
			this.openModal();

		} else {
			this.setState({
                success: false,
                invalid: true
            })
		}

	}

	// resetPost = () => {
	//   this.setState({
	//     success: false,
	//     title: '',
	//     author: '',
	//     category: '',
	//     body: '',
	//     invalid: false
	//   });
	// }

	render() {

		// if (this.state.success ) {
		// 	return (
        //
        //         <div className="modal-dialog modal-dialog-centered" role="document">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h5 className="modal-title" id="exampleModalLongTitle">Create a new post</h5>
        //                     <button type="button" className="close" onClick={this.props.modalClose}>
        //                         <span aria-hidden="true">&times;</span>
        //                     </button>
        //                 </div>
        //
        //                 <div className="modal-content">
        //                     <div className="modal-header">
        //                         <h5 className="modal-title" id="exampleModalLongTitle">New Post</h5>
        //                         <button type="button" className="close" onClick={this.closeModal}>
        //                             <span aria-hidden="true">&times;</span>
        //                         </button>
        //                     </div>
        //                     <div className="modal-body" id="post-form">
        //                         great!
        //                         <p>Your Post has been successfully added</p>
        //                     </div>
        //                     <div className="modal-footer">
        //                         <button type="submit" className="btn btn-primary" onClick={this.closeModal}>submit is success</button>
        //                     </div>
        //                 </div>
        //
        //         </div>
        //     </div>)
		// }

		return (
			<div>

				<form>
					<div className="form-group">
						<div className="form-group">
							<label for="title">Title</label>
							<input type="text" className="form-control" id="title" placeholder="Title" value={this.state.title} onChange={(e) => this.onChangeTitle(e)}/>
						</div>
					</div>
					<div className="form-group">
						<label for="author">Author</label>
						<input type="text" className="form-control" id="author" placeholder="Your name" value={this.state.author} onChange={(e) => this.onChangeAuthor(e)}/>
					</div>
					<div className="form-group">
						<label for="author">Category</label>
						<select className="form-control" id="category" value={this.state.category} onChange={(e) => this.onChangeCategory(e)}>
							<option>react</option>
							<option>redux</option>
							<option>udacity</option>
						</select>
					</div>
					<div className="form-group">
						<label for="content">Content</label>
						<textarea className="form-control" id="content" rows="3" value={this.state.body} onChange={(e) => this.onChangeBody(e)}></textarea>
					</div>
					<button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}  >Submit</button>
				</form>

				<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} className='Modal' contentLabel="Modal">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLongTitle">New Comment</h5>
								<button type="button" className="close" onClick={this.closeModal}>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body" id="post-form">
								<p>Yourpost has been successfully added</p>
							</div>
							<div className="modal-footer">
								<button type="submit" className="btn btn-primary" onClick={this.tobackClick}>submit is success</button>
							</div>
						</div>
					</div>
				</Modal>

			</div>
		)}
}

function mapStateToProps(categories) {
	return categories
}

function mapDispatchToProps(dispatch) {
	return {
		getAllCategories: () => dispatch(getAllCategories()),
		savePost: (newpost) => dispatch(addPost(newpost))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPost));

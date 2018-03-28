import React from 'react'

class NewPost extends React.Component {
	state = {
        newPost: {
        post: null,
        error: null,
        loading: false
	}
	render() {
		const { fields:{ title,categories, content}, handleSubmit} = this.props;
			return (
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLongTitle">Create a new post</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form className="clearfix" onSubmit={handleSubmit(this.props.createPost.bind(this))}>
								<div className="form-group">
									<label for="title">Title</label>
									<input type="text" className="form-control" id="title" placeholder="Title"/>
								</div>
								<div className="form-group">
									<label for="author">Author</label>
									<input type="text" className="form-control" id="author" placeholder="Your name"/>
								</div>
								<div className="form-group">
									<label for="author">Category</label>
									<select className="form-control" id="category">
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
			</div>)
		}

	}

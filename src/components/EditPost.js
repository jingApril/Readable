import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Modal from 'react-modal'
import {getAllCategories, getOnePost, editPost} from '../actions'

class EditPost extends React.Component {

    state = {
		title: '',
		author: '',
		body: '',
		category: '',
		invalid: false,
		success: false,
		edited: false,
		modalIsOpen: false
	}

	componentDidMount() {
		//this.props.getAllCategories();

         const {id} = this.props.match.params;
         this.props.getOnePost(id);
        //
		// const {id} = this.props.match.params;
		// this.props.getOnePost(id);


            const post = this.props.post;

        this.setState({
            id: post.id,
            title:  post.title,
            author:  post.author,
            category:  post.category,
            body:  post.body
        });
        console.log(post);
        // console.log(this.state);
    }

    componentWillUnmount() {
        this.setState({
            id: '',
            title:  '',
            author: '',
            category: '',
            body:  '',
            invalid: false,
            success: false,
            edited: false,
            modalIsOpen: false



        });
}

	onTitleChange(title) {
		this.setState({
            title: title.target.value
        })
	}

	onAuthorChange(author) {
		this.setState({
            author: author.target.value
        })
	}

	onCategoryChange(category) {
		this.setState({
            category: category.target.value
        })
	}

	onBodyChange(body) {
		this.setState({
            body: body.target.value
        })
    }

    tobackClick = () => {
   		this.props.history.push("/");
   	}
	onPostClick(e) {
		e.preventDefault();
        console.log(this.state.id);
        console.log(this.props);
		if (this.state.title && this.state.category && this.state.author && this.state.body) {
			this.props.editPost(this.state.id, {
				title: this.state.title,
				author: this.state.author,
				category: this.state.category,
				body: this.state.body
			}).then(() => this.setState({success: true, invalid: false}))
			this.openModal();
		} else {
			this.setState({invalid: true, success: false})
		}
	}


	openModal = this.openModal.bind(this);
	closeModal = this.closeModal.bind(this);

	openModal() {
		this.setState({
            modalIsOpen: true
        });

	}
	closeModal() {
		this.setState({
            modalIsOpen: false
        });

	}

	render() {

        //console.log(this.props.post);

		const categories = this.props.categories || [];
		const listOpt = categories.map(cat => <option value={cat.name} key={cat.path}>{cat.name}</option>)
		return (
            <div className="col-12 p-3 bg-white rounded box-shadow clearfix">

                <div>
                    {this.state.invalid && (<h3>Please enter all values...</h3>)}
                </div>

                <form>
                    <div className="form-group">
                        <div className="form-group">
                            <label>Title
                            </label>
                            <input type="text" className="form-control" id="title" placeholder="Title" value={this.state.title} onChange={(e) => this.onTitleChange(e)}/>

                        </div>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input type="text" className="form-control" id="author" placeholder="Your name" value={this.state.author} onChange={(e) => this.onAuthorChange(e)}/>

                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select className="form-control" id="category" value={this.state.category} onChange={(e) => this.onCategoryChange(e)}>
                            {listOpt}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea className="form-control" id="content" rows="3"
                            value={this.state.body} onChange={(e) => this.onBodyChange(e)}>
                        </textarea>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.tobackClick}>cancle</button>
                    <button type="submit" className="btn btn-primary" onClick={this.onPostClick.bind(this)}>Submit</button>
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
                                <p>Your post has been successfully modified</p>
                            </div>

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" onClick={this.tobackClick}>submit is success</button>
                            </div>
                        </div>
                    </div>
                </Modal>


            </div>)
	}
}

function mapStateToProps({categories, post}) {
	return {categories, post}
}

function mapDispatchToProps(dispatch) {
	return {
		getAllCategories: () => dispatch(getAllCategories()),
		getOnePost: (id) => dispatch(getOnePost(id)),
		editPost: (id, post) => dispatch(editPost(id, post))
	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPost));

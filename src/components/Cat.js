import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import Modal from 'react-modal'
import PropTypes from "prop-types"
import {getAllCategories, getPostsbyCategory} from '../actions'
import Posts from './Posts'
import Post from './Post'
import NewPost from './NewPost'

class Cat extends React.Component {

	state = {
		createPostModal: false
	};

	openNewPostModal = () => {
		this.setState(() => ({createPostModal: true}))

	}
	closeNewPostModal = () => {
		this.setState(() => ({createPostModal: false}))
	}
	componentWillMount() {
		Modal.setAppElement('body');
	}

	componentDidMount() {
		this.props.getAllCategories();
	}


	render() {
		const {activeItem, createPostModal} = this.state;
		const {categories} = this.props;
		const categoriesList = [
			"all", ...categories.map(category => {
				return category.name;
			})
		];
		{
		//	console.log(activeItem)
		}
		// {console.log(categoriesList)}
		return (
			<div>
				<header>
					<h1 className="display-2">Readable 评论页面</h1>
				</header>
				<hr className="side"/>
				<main role="main" className="container">
					<div className="row border-bottom border-gray pb-2 mb-0">

						<div className="col-sm-8 d-flex flex-row-reverse">
							{
								categoriesList.map((name) => (
									<div className="p-2"
										key={name}
										as={Link}
									>
										<Link
											to={name === "all" ? "" : `/${name}`}
											className="text-primary"
										>
											{name}
										</Link>
									</div>
								))
							}
							<Link to='/'>
								<button type="button" id="new-post" className="btn btn-primary" onClick={this.openNewPostModal}>
									Create New Post
								</button>
							</Link>
						</div>
					</div>
					<div className="my-3 p-3 bg-white rounded box-shadow">
						<Switch>
							<Route exact path="/" component={Posts}/>
							<Route exact path="/:category" component={Posts}/>
							<Route path="/:category/:id" component={Post}/>
						</Switch>
					</div>

				</main>
				<Modal isOpen={createPostModal}  className='Modal'>
					<NewPost modalClose={() => {this.closeNewPostModal()}}/>
				</Modal>
			</div>
		)
	}
}



function mapStateToProps(categories) {
	return categories
}

function mapDispatchToProps(dispatch) {
	return {
		getAllCategories: () => dispatch(getAllCategories()),
		//getPostsbyCategory: (category) => dispatch(getPostsbyCategory(category))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cat));

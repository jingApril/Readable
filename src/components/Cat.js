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
		activeItem: "all",
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

	handleActiveItem = (e, {name}) => {
		this.setState({activeItem: name});

	};

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
		return (<div>
			<header>
				<h1 className="display-2">Readable 评论页面</h1>
			</header>
			<hr className="side"/>
			<main role="main" className="container">
				<div className="my-3 p-3 bg-white rounded box-shadow">

					<div className="row border-bottom border-gray pb-2 mb-0">
						<div className="col-sm-4">
							<h6>Recent updates</h6>
						</div>
						<div className="col-sm-8 d-flex flex-row-reverse">
							{
								categoriesList.map((name) => (

                                    <div className="p-2"
                                        key={name}
                                        onClick={this.handleActiveItem}
                                        active={activeItem === name}
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

						</div>
					</div>
					<Switch>
						<Route path="/" component={Posts}/>
						<Route path="/:category" component={Posts}/>
					</Switch>
				</div>
				<div className="row d-flex flex-row-reverse">
					<div className="dropdown mr-3">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Recent Post
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="#">Ordered By Vote</a>
							<a className="dropdown-item" href="#">Ordered By Time</a>
						</div>
					</div>

					<Link to='/'>
						<button type="button" id="new-post" className="btn btn-primary" onClick={this.openNewPostModal}>
							Create New Post
						</button>
					</Link>

				</div>
			</main>
			<Modal isOpen={createPostModal}  className='Modal'>
				<NewPost modalClose={() => {this.closeNewPostModal()}}/>
			</Modal>

		</div>)
	}
}

Cat.propTypes = {
	categories: PropTypes.array.isRequired,
	getAllCategories: PropTypes.func.isRequired
};

// const mapStateToProps = ({categories}) => ({
//     categories: categories
// })

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

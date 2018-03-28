import React from 'react'

class PostList extends React.Component {
	state = {
		postsList: {
			posts: [],
			error: null,
			loading: false
		},
		deletePost:{
			post:  null,
			loading: false,
			error: null
		}
		render() {
			if(this.props.loading){
		        return <div><h1>Post Loading</h1></div>
			}
				return (
					{
						this.props.posts.map((post) => (

							<div className="title_item text-muted pt-3 border-bottom border-gray" key={post.id}>

								<Link to={"posts" + post.id}>
									<h3>{post.title}</h3>
								</Link>

								<div className="row">
									<div className="col-sm-8 float-left" id="title_item_left">
										<div className="d-inline p-2 text-dark">{post.author}</div>
										<time datetime="2016-02-25T19:19:31.193Z">{post.timestamp}</time>
										<div className="d-inline p-2 text-dark">{post.voteScore} 条评论</div>
										<div className="d-inline p-2 text-dark">{post.voteScore} Vote</div>
									</div>
									<div className="col-sm-4 d-flex flex-row-reverse" id="title_item_right">
										<button className="post-action-icon post-action-upvote icon-upvote-outline"></button>
										<i className="text-primary">1000 points</i>
										<div className="d-inline p-2 text-dark delete" data-toggle="modal" data-target="#pop_delete">
											<a href="javascript:void(0);">Delete</a>
										</div>
										<div className="d-inline p-2 text-dark">
											<a href="javascript:;">Edit</a>
										</div>
									</div>
								</div>
							</div>

						))

					}

				)

			}

		}
	}

	export default PostList

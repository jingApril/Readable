import React from 'react'

class PostDetail extends React.Component {

	render() {
		const {post} = this.props.activePost;
		if (!post) {
			return <div>Loading...</div>
		}
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
					<div class="row">
						<div class="col-sm-12">
							<h3 class="pb-2 mb-0 pt-3 text-primary">Comments</h3>
						</div>
					</div>
					<div class="media text-muted pt-3 border-bottom border-gray">
						<div class="row">
							<div class="col-md-12">
								<p class="media-body pb-3 mb-0 lh-125">
									Just get rid of it. Give peopl it. Give pe it. Give pe it. Give pe it. Give pe it. Give pe it. Give pe it. Give pe it. Give pe it. Give pe it. Give pe it. Give pe it. Give pe it. Give pe it. Give pe it. Give pe it. Give pe it. Give pee back their lives as most are too dumb to do it themselves.
								</p>
							</div>
							<div class="col-md-12 post_detail_bottom">
								<div class="col-sm-8 float-left" id="title_item_left">
									<div class="d-inline p-2 text-gray-dark">王王王王王王王</div>
									|
									<time datetime="2016-02-25T19:19:31.193Z">Feb 26, 2016</time>
									|
									<div class="d-inline p-2 text-gray-dark">28 条评论</div>
									|
									<div class="d-inline p-2 text-gray-dark">28 Vote</div>
								</div>
								<div class="col-sm-4 d-flex flex-row-reverse" id="title_item_right">
									<div class="d-inline p-2 text-dark delete" data-toggle="modal" data-target="#pop_delete">
										<a href="javascript:void(0);">Delete</a>
									</div>
									<div class="d-inline p-2 text-dark">
										<a href="javascript:;">Edit</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h3 class="pb-2 mb-1 pt-4 text-primary">Add your comment</h3>
					<div id="readerCommentsCommand" class="post-comment-form clearfix">
						<div class="bogr1 comment-form" id="ext-gen8">
							<input name="ieutf" type="hidden" value="☠"/>
							<input type="hidden" id="formAssetId" value="5516983"/>
							<a name="addComment"></a>
							<div id="readerCommentsCommand-message-field" class="textarea-holder field cleared">
								<span class="errors"></span>
								<textarea id="message" name="message" class="maxlength js-validate js-countdown js-defaultvalue js-expand textarea-input" rows="5" cols="40" title="Enter your comment">Enter your comment</textarea>
							</div>
							<div>
								<label for="auther">Auther:</label>
								<input id="auther" name="auther" type="text"/>
							</div>
							<div class="buttons-holder" id="ext-gen9">
								<button type="submit" class="btn btn-submit btn-disabled" id="ext-gen10" disabled="">Submit Comment</button>
								<button type="reset" class="btn btn-clear" id="ext-gen11">Clear</button>
							</div>
						</div>
					</div>
				</div>
			</main>

		</div>)
	}

}

export default PostDetail

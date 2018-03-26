import React from 'react'

export default function PostList ({ id }) {
  return (
	  <div className="title_item text-muted pt-3 border-bottom border-gray">
		  <h3><a target="_blank" href="/question/264926272/answer/324736725">有哪些一句话毁了一种食物的操作？</a></h3>
		  <div className="row">
			  <div className="col-sm-8 float-left" id="title_item_left">
				  <div className="d-inline p-2 text-dark">王王王王王王王</div>
				  <time datetime="2016-02-25T19:19:31.193Z">Feb 26, 2016</time>
				  <div className="d-inline p-2 text-dark">28 条评论</div>
				  <div className="d-inline p-2 text-dark">28 Vote</div>
			  </div>
			  <div className="col-sm-4 d-flex flex-row-reverse" id="title_item_right">
				  <button className="post-action-icon post-action-upvote icon-upvote-outline"></button><i className="text-primary">1000 points</i>
				  <div className="d-inline p-2 text-dark delete" data-toggle="modal" data-target="#pop_delete" ><a href="javascript:void(0);">Delete</a></div>
				  <div className="d-inline p-2 text-dark"><a href="javascript:;">Edit</a></div>
			  </div>
		  </div>
	  </div>
  )
}

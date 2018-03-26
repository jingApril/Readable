import React from 'react'

export default function DeletePost({ id }) {
  return (
	  <div className="modal fade" id="pop_delete" tabindex="-1" role="dialog" aria-labelledby="pop_deleteLabel" aria-hidden="true">
		  <div className="modal-dialog" role="document">
			  <div className="modal-content">
				  <div className="modal-header">
					  <h5 className="modal-title">Delete Post</h5>
					  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
					  </button>
				  </div>
				  <div className="modal-body">
					  <p>Hi, do you really want to delete this post?</p>
				  </div>
				  <div className="modal-footer">
					  <button type="button" className="btn btn-primary" id="sure_delete">Delete it</button>
					  <button type="button" className="btn btn-secondary" data-dismiss="modal" id="not_delete">Close</button>
				  </div>
			  </div>
		  </div>
	  </div>
  )
}

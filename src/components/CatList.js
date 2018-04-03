import React from 'react'
import { Route,Link } from 'react-router-dom'

export default function Cat ({cats}){
	return (
		<div className="col-sm-8 d-flex flex-row-reverse">
			{
				cats.map((cat) => (
					<div className="p-2" key={cat.name}>
						<Link to={cat.path} className="text-primary">{cat.name}</Link>
					</div>
				))
			}
		</div>
)}

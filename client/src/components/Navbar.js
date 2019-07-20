import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
	render() {
		return (
			<div className='ui secondary pointing menu'>
				<Link to='/' className='item'>
					ImageCatcher
				</Link>
				<div className='right menu'>
					<Link to='/photos' className='item'>
						Image Search
					</Link>
					<Link to='/collections' className='item'>
						All Collections
					</Link>
				</div>
			</div>
		)
	}
}

import React, { Component } from 'react'

export default class SearchBar extends Component {
	state = {
		term: ''
	}

	onFormSubmit = e => {
		e.preventDefault()

		this.props.onSearchSubmit(this.state.term)
		this.setState({ term: '' })
	}

	render() {
		return (
			<div className='ui segment'>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<label>Image Search</label>
						<input
							type='text'
							value={this.state.term}
							onChange={e => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		)
	}
}

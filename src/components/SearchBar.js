import React from 'react';

class SearchBar extends React.Component {
	// step: Initialize state object
	state = {term: ''}

	// step:  callback event handler for <input> onChange
	onInputChange = (event) => {
		this.setState({term: event.target.value});
	}

	// step: callback event handler for <form> onSubmit
	onFormSubmit = (event) => {
		event.preventDefault();

		/* -- note: this.prop.onFormSubmit created in App.js
			 -- code: From <App /> => Parent Component
			      <SearchBar onFormSubmit={this.onTermSubmit}
			 -- note: App.js onTermSubmit receives the term as an argument
			     and awaits response to youtube /search endpoint with
			      params { q: term }
		   -- important: When onSubmit event is triggered, form has been submitted */
		this.props.onFormSubmit(this.state.term);
	}

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="">Video Search</label>
						<input
							value={this.state.term}
							type="text"
							onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;
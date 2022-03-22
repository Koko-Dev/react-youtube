import React from 'react';

class SearchBar extends React.Component {
	state = {term: ''}

	onInputChange = (event) => {
		this.setState({term: event.target.value});
		console.log(this.state.term);

		// TODO: Make sure we call callback from parent
		//  component so that it tells the App that the
		//  user just submitted the form and that they
		//  probably want to attempt to initiate another
		//  search of the youTube API
	}
onFormSubmit = (event) => {
		event.preventDefault();
		console.log('Form has been submitted');
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
import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit}/>
			</div>
		)
	}
}

export default App;
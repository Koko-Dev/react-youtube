import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
	onTermSubmit = async (term) => {
		// TODO: Fetch a list of videos according to term
		// TODO: Take the videos received and
		//  set them as state on our App component.
		// NOTE: This will allow App component to
		//  rerender/update itself, which is then going
		//  to allow us to render those newly fetched
		//  videos out as a list onto the screen.
		await youtube.get('/search', {
			params: {
				q: term
			}
		})
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit}/>
			</div>
		)
	}
}

export default App;
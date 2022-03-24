import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList  from "./VideoList";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	onTermSubmit = async (term) => {
		// TODO: Fetch a list of videos according to term
		// TODO: Take the videos received and
		//  set them as state on our App component.
		// NOTE: This will allow App component to
		//  rerender/update itself, which is then going
		//  to allow us to render those newly fetched
		//  videos out as a list onto the screen.
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});

		this.setState({ videos: response.data.items });
	}

	// note: argument video is the video we collect from youtube api
	onVideoSelect = (video) => {
		console.log('From the App!', video);
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit}/>
				<VideoList videos={this.state.videos} />
			</div>
		)
	}
}

export default App;
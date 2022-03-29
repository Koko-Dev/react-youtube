import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList  from "./VideoList";
import VideoDetail from "./VideoDetail";

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
		this.setState({selectedVideo: video});
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar callMeWhenSubmitted={this.onTermSubmit}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
			</div>
		)
	}
}

export default App;
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList  from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	/*TODO: Create a default search for when the user
	    first opens the app by running a search when
	    the app first renders.
		NOTE: To do this we manually call on onTermSubmit
				because that is the function that is currently
				handling doing a search and updating the state
				of our component*/
	componentDidMount() {
		this.onTermSubmit('carrots');
	}

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

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	}

	// note: argument video is the video we collect from youtube api
	onVideoSelect = (video) => {
		this.setState({selectedVideo: video});
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onTermSubmit={this.onTermSubmit}/>
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
						</div>
					</div>
					{/* /.ui row */}


				</div>
				{/* /.ui grid */}

			</div>
		)
	}
}

export default App;
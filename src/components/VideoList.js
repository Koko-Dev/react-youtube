import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
	// NOTE: props.video = array of different records
	//  of videos that we will render out as HTML onto
	//  the screen
	// TODO: Map over the video list and render one
	//  <VideoItem /> for each video
	const renderedList = videos.map((video) => {
		return <VideoItem video={video}/>;
	})
	return (
		<div className="ui relaxed divided list">{renderedList}</div>
	)
}

export default VideoList;
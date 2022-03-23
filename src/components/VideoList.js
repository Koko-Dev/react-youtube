import React from 'react';

const VideoList = (props) => {
	// NOTE: props.video = array of different records
	//  of videos that we will render out as HTML onto the screen
	return (
		<div>{props.videos.length}</div>
	)
}

export default VideoList;
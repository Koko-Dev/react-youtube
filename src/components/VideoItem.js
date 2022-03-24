import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className="item video-item">
			<img src={video.snippet.thumbnails.medium.url}
			     className="ui image"/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
				{/* /.header */}
				{/*<div className="description">{video.snippet.description}</div>*/}
				{/* /.description */}
			</div>
			{/* /.content */}
		</div>
	)
}

export default VideoItem;
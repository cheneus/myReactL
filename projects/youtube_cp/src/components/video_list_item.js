import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	// grab the props.video and redeclare it ; grab the property you want
	// console.log(props)
	console.log(video)
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li onClick = {() => onVideoSelect(video)}className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="mr-3" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	)
};

export default VideoListItem
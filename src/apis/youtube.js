import axios from 'axios';
const KEY = 'PUT IN YOUR API KEY HERE';

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
		order: "relevance",
		prettyPrint: true
	},
	headers: {}
})


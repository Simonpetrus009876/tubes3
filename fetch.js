import fetch from 'node-fetch';
const options = {
	method: "GET",
	headers: {
		"Authorization": "$YOUR_TOKEN",
		"Content-Type": "application/json",
	},
};
const url= `https://api.videosdk.live/v2/rooms?page=1&perPage=20`;
const response = await fetch(url, options);
const data = await response.json();
console.log(data);
import fetch from 'node-fetch';
const options = {
	method: "GET",
	headers: {
		"Authorization": "$YOUR_TOKEN",
		"Content-Type": "application/json",
	},
};
const roomId = "your_roomId";
const url= `https://api.videosdk.live/v2/rooms/validate/${roomId}`;
const response = await fetch(url, options);
const data = await response.json();
console.log(data);
import fetch from 'node-fetch';
const options = {
	method: "POST",
	headers: {
		"Authorization": "$YOUR_TOKEN",
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		"customRoomId" : "aaa-bbb-ccc",
		"webhook" : "see example",
		"autoCloseConfig" : "see example",
		"autoStartConfig" : "see example",
		"multiComposition" : "multiCompositionObj"
	}),
};
const url= `https://api.videosdk.live/v2/rooms`;
const response = await fetch(url, options);
const data = await response.json();
console.log(data);


// Import package
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";

// Initialize Meeting
let meeting = VideoSDK.initMeeting({
  meetingId: "your-meeting-id",
  micEnabled: true,
  webcamEnabled: true,
  name: "YourName",
});

// Instantiate VirtualBackgroundProcessor Class
const videoProcessor = new VirtualBackgroundProcessor();

const startVirtualBackgroundBtn = document.getElementById("startVirtualBackgroundBtn");
const updateVirtualBackgroundBtn = document.getElementById("updateVirtualBackgroundBtn");
const stopVirtualBackgroundBtn = document.getElementById("stopVirtualBackgroundBtn");

startVirtualBackgroundBtn.addEventListener("click", async () => {
  // Initialize processor if not ready
  if (!videoProcessor.ready) {
    await videoProcessor.init();
  }

  // Configuration for starting processor
  const config = {
    type: "image", // "blur" for blur effect
    imageUrl: "https://cdn.videosdk.live/virtual-background/cloud.jpeg",
  };

  // Getting stream from webcam
  const stream = await VideoSDK.createCameraVideoTrack({});
  const processedStream = await videoProcessor.start(stream, config);

  // Pass processed stream to the meeting
  meeting?.changeWebcam(processedStream);
});

updateVirtualBackgroundBtn.addEventListener("click", async () => {
  const config = {
    type: "image", // "blur"
    imageUrl: "https://cdn.videosdk.live/virtual-background/beach.jpeg",
  };

  videoProcessor.updateProcessorConfig(config);
});

stopVirtualBackgroundBtn.addEventListener("click", async () => {
  videoProcessor.stop();

  // Pass plain webcam MediaStream to the meeting
  const stream = await VideoSDK.createCameraVideoTrack({});
  meeting?.changeWebcam(stream);
});

// Using Processed Stream during Meeting Initialization
(async () => {
  const stream = await VideoSDK.createCameraVideoTrack({});
  if (!videoProcessor.ready) {
    await videoProcessor.init();
  }
  const processedStream = await videoProcessor.start(stream, {
    type: "image", // "blur"
    imageUrl: "https://cdn.videosdk.live/virtual-background/cloud.jpeg",
  });

  meeting = VideoSDK.initMeeting({
    meetingId: "your-meeting-id",
    micEnabled: true,
    webcamEnabled: true,
    name: "YourName",
    customCameraVideoTrack: processedStream, // Pass processed MediaStream
  });
})();

const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt the use to select a media stream, pass to vieo elemetn, and then gonna play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //Catch errors
    console.log("whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  //Disable the button when click
  button.disabled = true;
  //Start picture in picture
  await videoElement.requestPictureInPicture();
  //Reset the button
  button.disabled = false;
});
//On load
selectMediaStream();

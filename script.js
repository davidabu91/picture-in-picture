const videoElelment = document.getElementById('video');
const button = document.getElementById('button');

// Promt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElelment.srcObject = mediaStream;
        videoElelment.onloadedmetadata = () => {
            videoElelment.play();
        }
    } catch (error) {
        console.log('whoops, error here:', error)
    }
}

button.addEventListener('click', async() => {
    //Disable button
    button.disable = true;
    //Start Picture in Picture
    await videoElelment.requestPictureInPicture();
    //Reset Button
    button.disable = false;
});

//Onload
selectMediaStream();
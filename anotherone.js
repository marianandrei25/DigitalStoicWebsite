// Array of images (You can add URLs to your own images)
const images = [
    'https://img.freepik.com/premium-photo/stoic-figure-with-intense-expression-floating-embers_818261-87802.jpg?w=740',
    'https://img.freepik.com/free-photo/view-bust-figure-from-ancient-greece_23-2151616941.jpg?t=st=1729793127~exp=1729796727~hmac=b29ed6b6d54d439131542c2a355508fbe31aea2c4dd2a4976c51536a3bbff690&w=996',
    'https://img.freepik.com/free-photo/view-bust-figure-from-ancient-greece_23-2151616940.jpg?t=st=1729793078~exp=1729796678~hmac=0100f433a4ee0208f0b774b9540d5f38a614027362b3743175921e619f6bcdbc&w=996',
];

// Function to get a random image based on the current day
function getDailyImage() {
    const date = new Date();
    const dayIndex = date.getDate() % images.length; // Get the index based on day of the month
    return images[dayIndex];
}

// Set the daily image
window.onload = function() {
    const imgElement = document.getElementById('dailyImage');
    imgElement.src = getDailyImage();
};

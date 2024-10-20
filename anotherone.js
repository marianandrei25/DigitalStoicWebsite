// Array of images (You can add URLs to your own images)
const images = [
    'https://img.freepik.com/premium-photo/stoic-figure-with-intense-expression-floating-embers_818261-87802.jpg?w=740',
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

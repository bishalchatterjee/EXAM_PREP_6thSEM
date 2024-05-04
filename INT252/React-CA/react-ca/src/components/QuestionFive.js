//Build an image gallery that loads more image as the user scrolls down the page. Implement lazy loading for improved performance

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Load more images when the observed element is in view
            loadMoreImages();
        }
    });
});

// Find the element that triggers the loading of more images
const triggerElement = document.querySelector('#trigger-element');

// Start observing the trigger element
observer.observe(triggerElement);

// Function to load more images
function loadMoreImages() {
    // Make an API call or load images from a data source
    // Append the new images to your image gallery
}
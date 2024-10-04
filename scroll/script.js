// Get the elements from the DOM
const progressBar = document.getElementById("progressBar");
const scrollInfo = document.getElementById("scrollInfo");

// Function to update the scroll progress
function updateScrollProgress() {
    const scrollTop = window.scrollY; // How much the user has scrolled
    const scrollHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercent = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage

    // Update the progress bar width and scroll info text
    progressBar.style.width = scrollPercent + "%";
    scrollInfo.textContent = `Scroll Percentage: ${Math.round(scrollPercent)}%`;
}

// Add an event listener to track scroll
window.addEventListener("scroll", updateScrollProgress);

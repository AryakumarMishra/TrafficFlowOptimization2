// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // Adjust based on your header height
        behavior: "smooth",
      });
    }
  });
});

// Live Feed Button Alert (Placeholder for real functionality)
const liveFeedBtn = document.querySelector(
  '.cta-button[href="/liveFeed.html"]'
);
liveFeedBtn.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Live feed is currently not available. Please try again later.");
  // Replace the alert with actual video stream logic in the future
});

// Console log on window load (Placeholder for additional future functionality)
window.onload = function () {
  console.log("Traffic Optimization System Loaded");
  // Add any additional startup code here if needed
};

// Pause and reset video when out of view
const videos = document.querySelectorAll("video");

function handleVideoScroll() {
  videos.forEach((video) => {
    const rect = video.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (!isInView && !video.paused) {
      video.pause(); // Pause the video when it's out of view
    } else if (isInView && video.paused) {
      video.play(); // Automatically play when in view
    }
  });
}

// Add scroll event listener to handle video play/pause on scroll
window.addEventListener("scroll", handleVideoScroll);

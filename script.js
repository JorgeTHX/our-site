console.log("9 months of love ❤️");

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".gallery img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Relationship Timer

const startDate = new Date("2025-05-20T00:00:00");

function updateTimer() {
    const now = new Date();
    const difference = now - startDate;

    const seconds = Math.floor(difference / 1000);
    const days = Math.floor(seconds / (60 * 60 * 24));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = remainingSeconds;
}

setInterval(updateTimer, 1000);
updateTimer();
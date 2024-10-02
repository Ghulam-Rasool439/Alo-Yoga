document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll(".announcement-text p");
    const pushButton = document.getElementById("push-btn");
    const resumeButton = document.getElementById("resume-btn");
    let currentIndex = 0;
    let interval;
  
    function showParagraph(index) {
        paragraphs.forEach((p, i) => {
            p.style.display = i === index ? "block" : "none";
        });
    }
  
    function startRotation() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % paragraphs.length;
            showParagraph(currentIndex);
        }, 2000);
        toggleButtons(false); // Show the push button and hide the resume button
    }
  
    function stopRotation() {
        clearInterval(interval);
        toggleButtons(true); // Show the resume button and hide the push button
    }
  
    function toggleButtons(isPaused) {
        if (isPaused) {
            pushButton.style.display = "none";
            resumeButton.style.display = "inline-block";
        } else {
            pushButton.style.display = "inline-block";
            resumeButton.style.display = "none";
        }
    }
  
    pushButton.addEventListener("click", stopRotation);
    resumeButton.addEventListener("click", startRotation);
  
    // Initialize: Display the first paragraph, start rotation, and set button visibility
    showParagraph(currentIndex);
    startRotation();
    toggleButtons(false); // Initially show the push button
  });
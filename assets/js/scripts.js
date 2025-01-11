/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Array of messages to display
const messages = [
    "Cutting costs isn't always the answer - it can actually make your business more expensive to run.",
    "Adding more people to a project doesn't always make it faster - sometimes it slows things down.",
    "Let Ruike help you find the right balance for your business.",
];

// Function to animate text
function animateText() {
    const textElement = document.getElementById('animated-text');
    let currentIndex = 0;

    async function displayMessage() {
        // Fade out
        textElement.style.opacity = '0';
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Update text
        textElement.textContent = messages[currentIndex];

        // Fade in
        textElement.style.opacity = '1';
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Move to next message
        currentIndex = (currentIndex + 1) % messages.length;

        // Continue animation
        displayMessage();
    }

    // Start the animation
    displayMessage();
}

// Start animation when page loads
document.addEventListener('DOMContentLoaded', animateText);
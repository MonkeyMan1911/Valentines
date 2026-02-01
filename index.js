function noClick(button, yesBtn) {
    const rect = button.getBoundingClientRect();
    console.log(rect.top, rect.left);
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Get button dimensions
    const buttonWidth = rect.width;
    const buttonHeight = rect.height;
    
    // Generate random position (ensuring button stays within viewport)
    const randomX = Math.random() * (viewportWidth - buttonWidth);
    const randomY = Math.random() * (viewportHeight - buttonHeight);
    
    // Apply position with fixed positioning and reset any previous positioning
    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
    button.style.transform = 'none'; // Reset any transforms
    button.style.margin = '0'; // Reset margins

    yesBtn.style.transform = "scale(1.3)"
}

function yesClick() {
    document.getElementById('yes-btn').style.display = "none"
    document.getElementById('no-btn').style.display = "none"
    document.getElementById('hint').style.display = "none"
    document.getElementById('response').style.display = "block"
    document.getElementById('question-txt').innerText = "I know you clicked no 6 or 7 times but"
    document.getElementById('image').src = "image2.jpg"
    const duration = 1500; // 1.5 seconds
    const end = Date.now() + duration;

    (function frame() {
    confetti({
        particleCount: 8,
        spread: 80,
        startVelocity: 35,
        colors: ['#1e90ff', '#00bfff', '#4169e1'], // blue shades
        origin: { y: 0.6 }
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    })();
}
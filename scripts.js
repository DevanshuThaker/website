// Click YES button
function clickYesButton() {
    let loveMessage = document.getElementById('love-message');
    loveMessage.innerHTML = 'I love you too <3';
    
    // Add animations or effects to make it more attractive
    loveMessage.style.display = 'block';
    loveMessage.classList.add('fade-in');
    loveMessage.classList.add('bounce-in');
}

// Move button on hover
function hoverNoButton() {
    // Random position on screen for the NO button
    let x = Math.random() * (window.innerWidth - 150); // 150 to ensure it doesn't go off-screen
    let y = Math.random() * (window.innerHeight - 50); // 50 for the button height

    document.getElementById('no-button').style.left = x + 'px';
    document.getElementById('no-button').style.top = y + 'px';
}

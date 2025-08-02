function clickYesButton() {
    let loveMessage = document.getElementById('love-message');
    loveMessage.innerHTML = 'I love you too ❤️';
    loveMessage.style.display = 'block';
    loveMessage.classList.add('fade-in');
    loveMessage.classList.add('bounce-in');

    // Spawn multiple hearts
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
}

function hoverNoButton() {
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 50);
    let btn = document.getElementById('no-button');
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// Floating heart generator
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

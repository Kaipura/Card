let isEnvelopeOpen = false;

function toggleEnvelope() {
    const envelopeTop = document.querySelector('.envelope-top');
    const cardContent = document.querySelector('.card-content');
    const catGif = document.querySelector('.cat-gif');
    const confettiContainer = document.getElementById('confetti');
    const clickHere = document.getElementById('click-here');
    
    if (!isEnvelopeOpen) {
        // Open envelope animation
        envelopeTop.style.transform = 'rotateX(-180deg)';
        isEnvelopeOpen = true;

        // Show the greeting message and launch balloons after a delay
        setTimeout(() => {
            cardContent.style.display = 'block';
            catGif.style.display = 'block'; // Show the cat GIF
            launchBalloons();
            launchConfetti();
            clickHere.style.display = 'none'; // Hide the click here sign
        }, 500);
    } else {
        // Close envelope animation
        envelopeTop.style.transform = 'rotateX(0deg)';
        isEnvelopeOpen = false;

        // Hide the card content and stop confetti and balloons
        cardContent.style.display = 'none';
        catGif.style.display = 'none'; // Hide the cat GIF
        confettiContainer.style.display = 'none';
        
        // Stop balloons (remove all balloons from container)
        const balloonContainer = document.getElementById('balloon-container');
        balloonContainer.innerHTML = '';

        // Show the click here sign again
        clickHere.style.display = 'block';
    }
}

// Hide the "Click Here" sign when clicked
function hideClickHere() {
    const clickHere = document.getElementById('click-here');
    clickHere.style.display = 'none';
}

//  floating balloons
function launchBalloons() {
    const balloonContainer = document.getElementById('balloon-container');

    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        
        // Randomize size, position, color, and animation duration
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDuration = `${Math.random() * 3 + 5}s`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
        balloon.style.width = `${Math.random() * 30 + 20}px`;
        balloon.style.height = `${Math.random() * 50 + 40}px`;

        balloonContainer.appendChild(balloon);

        // Remove balloon after it floats out of view
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }
}

//  falling confetti
function launchConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.style.display = 'block'; // Show confetti container

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 2}s`;

        confettiContainer.appendChild(confettiPiece);

        // Remove confetti piece after falling
        confettiPiece.addEventListener('animationend', () => {
            confettiPiece.remove();
        });
    }
}

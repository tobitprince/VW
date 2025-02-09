function nextPage() {
    window.location.href = "yes.html";
}

document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');

    // Mouse events
    noButton.addEventListener('mouseover', moveButton);

    // Touch events
    noButton.addEventListener('touchstart', handleTouch, { passive: false });
    noButton.addEventListener('touchmove', handleTouch, { passive: false });

    function handleTouch(e) {
        e.preventDefault();
        moveButton();
    }

    function moveButton() {
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        const x = Math.random() * maxWidth;
        const y = Math.random() * maxHeight;

        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }
});
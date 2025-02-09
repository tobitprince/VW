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
        var noButton = document.getElementById('noButton');
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var buttonWidth = noButton.offsetWidth;
        var buttonHeight = noButton.offsetHeight;

        var currentLeft = noButton.offsetLeft;
        var currentTop = noButton.offsetTop;

        // Calculate maximum allowed positions, considering current position
        var maxLeft = viewportWidth - buttonWidth;
        var maxTop = viewportHeight - buttonHeight;

        // Generate random offsets, ensuring the new position stays within the viewport
        var maxOffsetLeft = Math.min(200, maxLeft - currentLeft); // Limit offset to 100px or available space
        var maxOffsetTop = Math.min(200, maxTop - currentTop);     // Limit offset to 100px or available space

        var newLeft = currentLeft + (Math.random() * maxOffsetLeft * 2) - maxOffsetLeft; // Offset between -maxOffsetLeft and +maxOffsetLeft
        var newTop = currentTop + (Math.random() * maxOffsetTop * 2) - maxOffsetTop;   // Offset between -maxOffsetTop and +maxOffsetTop

        // Ensure the new position is within the viewport bounds
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop = Math.max(0, Math.min(newTop, maxTop));

        noButton.style.position = 'absolute';
        noButton.style.left = newLeft + 'px';
        noButton.style.top = newTop + 'px';
    }
});

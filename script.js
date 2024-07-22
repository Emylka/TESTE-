const redBox = document.getElementById('red-box');
const greenBox = document.getElementById('green-box');
const boxSize = 120;

function getViewportSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}

function getRandomPosition() {
    const { width, height } = getViewportSize();
    let x, y;

    do {
        x = Math.random() * (width - boxSize);
        y = Math.random() * (height - boxSize);
    } while (isOverlapping(x, y, greenBox.offsetLeft, greenBox.offsetTop));

    return { x, y };
}

function isOverlapping(x1, y1, x2, y2) {
    return !(x1 > x2 + boxSize ||
             x1 + boxSize < x2 ||
             y1 > y2 + boxSize ||
             y1 + boxSize < y2);
}

function moveRedBox() {
    const { x, y } = getRandomPosition();
    redBox.style.left = `${x}px`;
    redBox.style.top = `${y}px`;
}

function handleMouseOver() {
    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(() => {
        moveRedBox();
    }, 300);
}

// Handle touch events for mobile devices
function handleTouchStart() {
    clearTimeout(moveTimeout);
    moveRedBox();
}

// Add event listeners
redBox.addEventListener('mouseover', handleMouseOver);
redBox.addEventListener('mouseout', () => {
    clearTimeout(moveTimeout);
});
redBox.addEventListener('click', moveRedBox);
redBox.addEventListener('touchstart', handleTouchStart);

greenBox.addEventListener('click', () => {
    alert('te amo muito minha princesa maravilhosa UwU');
});
greenBox.addEventListener('touchstart', () => {
    alert('te amo muito minha princesa maravilhosa UwU');
});

// Adjust viewport size on resize
window.addEventListener('resize', () => {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
});

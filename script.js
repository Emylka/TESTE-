const redBox = document.getElementById('red-box');
const greenBox = document.getElementById('green-box');

const boxSize = 120; // Size of the box (width and height)
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

let moveTimeout;

// Function to generate a random position that does not overlap with the green box
function getRandomPosition() {
    let x, y;

    do {
        x = Math.random() * (viewportWidth - boxSize);
        y = Math.random() * (viewportHeight - boxSize);
    } while (isOverlapping(x, y, greenBox.offsetLeft, greenBox.offsetTop));

    return { x, y };
}

// Function to check if the red box overlaps with the green box
function isOverlapping(x1, y1, x2, y2) {
    return !(x1 > x2 + boxSize ||
             x1 + boxSize < x2 ||
             y1 > y2 + boxSize ||
             y1 + boxSize < y2);
}

// Move the red box with a delay when mouse hovers over it or when clicked
function moveRedBox() {
    const { x, y } = getRandomPosition();
    redBox.style.left = `${x}px`;
    redBox.style.top = `${y}px`;
}

// Handle movement when mouse is over the box
function handleMouseOver() {
    // Clear any previous timeout
    clearTimeout(moveTimeout);
    
    // Set a new timeout to move the red box
    moveTimeout = setTimeout(() => {
        moveRedBox();
    }, 300); // Move after 0.3 seconds for faster movement
}

// Mouseover event handler
redBox.addEventListener('mouseover', handleMouseOver);

// Mouseout event handler
redBox.addEventListener('mouseout', () => {
    // Clear any scheduled move
    clearTimeout(moveTimeout);
});

// Click event handler
redBox.addEventListener('click', () => {
    // Clear any previous timeout
    clearTimeout(moveTimeout);
    
    // Move immediately when clicked
    moveRedBox();
});

// Show an alert when clicking the green box
greenBox.addEventListener('click', () => {
    alert('te amo muito minha princesa maravilhosa UwU');
});

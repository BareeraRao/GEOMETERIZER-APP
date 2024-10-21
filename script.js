// Function to display the relevant input fields based on shape selection
function displayInputs() {
    const shape = document.getElementById('shape').value;
    const inputFields = document.getElementById('inputFields');
    inputFields.innerHTML = ''; // Clear previous inputs

    if (shape === 'square') {
        inputFields.innerHTML = `
            <label for="side">Side Length:</label>
            <input type="number" id="side" required>
        `;
    } else if (shape === 'rectangle') {
        inputFields.innerHTML = `
            <label for="length">Length:</label>
            <input type="number" id="length" required>
            <label for="width">Width:</label>
            <input type="number" id="width" required>
        `;
    } else if (shape === 'circle') {
        inputFields.innerHTML = `
            <label for="radius">Radius:</label>
            <input type="number" id="radius" required>
        `;
    } else if (shape === 'triangle') {
        inputFields.innerHTML = `
            <label for="base">Base:</label>
            <input type="number" id="base" required>
            <label for="height">Height:</label>
            <input type="number" id="height" required>
        `;
    }
}

// Function to draw the shape based on user input
function drawShape() {
    const shape = document.getElementById('shape').value;
    const color = document.getElementById('color').value;
    const canvas = document.getElementById('shapeCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings

    // Set the stroke color
    ctx.strokeStyle = color;
    // Set the fill color
    ctx.fillStyle = color;

    if (shape === 'square') {
        const side = document.getElementById('side').value;

        // Draw the square
        ctx.beginPath();
        ctx.rect(50, 50, side, side);
        ctx.fill(); // Fill with color
        ctx.stroke(); // Draw the border
    } else if (shape === 'rectangle') {
        const length = document.getElementById('length').value;
        const width = document.getElementById('width').value;

        // Draw the rectangle
        ctx.beginPath();
        ctx.rect(50, 50, length, width);
        ctx.fill(); // Fill with color
        ctx.stroke(); // Draw the border
    } else if (shape === 'circle') {
        const radius = document.getElementById('radius').value;

        // Draw the circle
        ctx.beginPath();
        ctx.arc(150, 150, radius, 0, Math.PI * 2);
        ctx.fill(); // Fill with color
        ctx.stroke(); // Draw the border
    } else if (shape === 'triangle') {
        const base = document.getElementById('base').value;
        const height = document.getElementById('height').value;

        // Draw the triangle
        ctx.beginPath();
        ctx.moveTo(150, 150 - height / 2);  // Top vertex
        ctx.lineTo(150 - base / 2, 150 + height / 2); // Bottom left vertex
        ctx.lineTo(150 + base / 2, 150 + height / 2); // Bottom right vertex
        ctx.closePath();
        ctx.fill(); // Fill with color
        ctx.stroke(); // Draw the border
    }
}

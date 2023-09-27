$(document).ready(function () {
    // Get the canvas element and its context
    var canvas = document.getElementById('grid');
    var ctx = canvas.getContext('2d');

    // Set the initial grid size
    var gridSize = 50;

    // Create the slider
    var slider = new Slider('#slider', {
        min: 10,
        max: 100,
        step: 1,
        value: gridSize
    });

    // Update the grid size when the slider value changes
    slider.on('change', function (value) {
        gridSize = value.newValue;
        drawGrid();
    });

    // Draw the initial grid
    drawGrid();

    // Function to draw the grid
    function drawGrid() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate the size of each grid cell
        var cellSize = canvas.width / gridSize;

        // Draw the grid
        for (var x = 0; x < gridSize; x++) {
            for (var y = 0; y < gridSize; y++) {
                ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
            }
        }
    }
});
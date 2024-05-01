$(document).ready(function() {
    // Maze size/dimension
    let mazeHeight = 400
    let mazeWidth = 400

    // Player start position
    let playerX = 20
    let playerY = 20

    // Movement functionality
    function movePlayer(dx, dy) {
        let newX = playerX + dx;
        let newY = playerY + dy;

        // Verify new position is inside of maze walls
        if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight) {
            //Check to see if the new position is a wall or not
            if (!$('#maze').find('.wall').is('[style="top: ' + newY + 'px; left: ' + newX + 'px;"]')) {
                //We can move the player
                playerX = newX;
                playerY = newY;
                $('#player').css({ top: playerY + 'px', left: playerX + 'px' });
            }

            //Check to see if the player reaches the end
            if(playerX === 380 && playerY === 380){
                setTimeout(alert.bind(null, "Congratulations! You beat the maze!"))
            }

        }
    }

    // Keypress event listeners
    $(document).keydown(function(e) { 
        switch (e.which) {
            case 37: // Left Arrow
                movePlayer(-20, 0)
                break
            case 38: // Up Arrow
                movePlayer(0, -20)
                break
            case 39: // Right Arrow
                movePlayer(20, 0)
                break
            case 40: // Down Arrow
                movePlayer(0, 20)
                break
        }
    });

    // Create maze walls
    const levels = {
        easy: [
            { top: 0, left: 20 },
            { top: 0, left: 100 },
            { top: 0, left: 240 },
            { top: 20, left: 20 },
            { top: 20, left: 60 },
            { top: 20, left: 100 },
            { top: 20, left: 120 },
            { top: 20, left: 140 },
            { top: 20, left: 180 },
            { top: 20, left: 200 },
            { top: 20, left: 220 },
            { top: 20, left: 240 },
            { top: 20, left: 20 },
            { top: 20, left: 20 },
            { top: 20, left: 20 },
            { top: 100, left: 40 },
            { top: 180, left: 40 },
            // Add more walls here for the easy level
        ],
        medium: [
            { top: 20, left: 40 },
            { top: 80, left: 160 },
            { top: 140, left: 40 },
            // Add more walls here for the medium level
        ],
        hard: [
            { top: 20, left: 40 },
            { top: 80, left: 40 },
            { top: 140, left: 40 },
            // Add more walls here for the hard level
        ]
    };

    function createMaze(level) {
        wallCoordinates = levels[level]
    }
    $("start-button").click("click", function() {
        difficulty = document.getElementById("difficulty-select").value
        createMaze(difficulty)
    })

    for (var i = 0; i < wallCoordinates.length; i++) {
        $('#maze').append('<div class="wall" style="top: ' + wallCoordinates[i].top + 'px; left: ' + wallCoordinates[i].left + 'px;"></div>');
    }

    // Create the player and append it to the board
    $('#maze').append('<div class="player" id="player" style="top: ' + playerY + 'px; left: ' + playerX + 'px;"></div>')
})
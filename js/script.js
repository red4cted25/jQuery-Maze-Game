$(document).ready(function() {
    // Maze size/dimension
    let wallCoordinates;
    let mazeHeight = 400
    let mazeWidth = 400

    // Player start position
    let playerX = 0
    let playerY = 0

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
                $('#player').css('background-image', 'url("../assets/charleft.png")');
                break
            case 38: // Up Arrow
                movePlayer(0, -20)
                $('#player').css('background-image', 'url("../assets/charback.png")');
                break
            case 39: // Right Arrow
                movePlayer(20, 0)
                $('#player').css('background-image', 'url("../assets/charright.png")');
                break
            case 40: // Down Arrow
                movePlayer(0, 20)
                $('#player').css('background-image', 'url("../assets/charforward.png")');
                break
        }
    });

    // Create maze walls
    const levels = {
        easy: [
            { top: 100, left: 0 },
            { top: 180, left: 0 },
            { top: 300, left: 0 },

            { top: 20, left: 20 },
            { top: 40, left: 20 },
            { top: 60, left: 20 },
            { top: 80, left: 20 },
            { top: 100, left: 20 },
            { top: 140, left: 20 },
            { top: 180, left: 20 },
            { top: 220, left: 20 },
            { top: 260, left: 20 },
            { top: 300, left: 20 },
            { top: 340, left: 20 },
            { top: 380, left: 20 },
    
            { top: 140, left: 40 },
            { top: 220, left: 40 },
            { top: 260, left: 40 },
            { top: 300, left: 40 },
            { top: 340, left: 40 },
    
            { top: 0, left: 60 },
            { top: 20, left: 60 },
            { top: 40, left: 60 },
            { top: 60, left: 60 },
            { top: 80, left: 60 },
            { top: 100, left: 60 },
            { top: 120, left: 60 },
            { top: 140, left: 60 },
            { top: 160, left: 60 },
            { top: 180, left: 60 },
            { top: 200, left: 60 },
            { top: 220, left: 60 },
            { top: 260, left: 60 },
            { top: 280, left: 60 },
            { top: 300, left: 60 },
            { top: 340, left: 60 },
            { top: 360, left: 60 },
    
            { top: 160, left: 80 },
            { top: 180, left: 80 },
            { top: 200, left: 80 },
            { top: 220, left: 80 },
            { top: 240, left: 80 },
            { top: 260, left: 80 },
            { top: 280, left: 80 },
            { top: 300, left: 80 },
            { top: 320, left: 80 },
    
            { top: 100, left: 200 },
            { top: 120, left: 200 },
            { top: 140, left: 200 },
            { top: 160, left: 200 },
            { top: 180, left: 200 },
            { top: 200, left: 200 },
            { top: 220, left: 200 },
            { top: 240, left: 200 },
            { top: 260, left: 200 },
            { top: 280, left: 200 },
            { top: 300, left: 200 },
            { top: 320, left: 200 },
    
            { top: 220, left: 220 },
            { top: 240, left: 220 },
            { top: 260, left: 220 },
            { top: 280, left: 220 },
            { top: 300, left: 220 },
            { top: 320, left: 220 },
    
            { top: 100, left: 240 },
            { top: 120, left: 240 },
            { top: 140, left: 240 },
            { top: 160, left: 240 },
            { top: 180, left: 240 },
            { top: 200, left: 240 },
            { top: 220, left: 240 },
            { top: 240, left: 240 },
            { top: 260, left: 240 },
            { top: 280, left: 240 },
    
            { top: 160, left: 260 },
            { top: 180, left: 260 },
            { top: 200, left: 260 },
            { top: 220, left: 260 },
            { top: 240, left: 260 },
            { top: 260, left: 260 },
            { top: 280, left: 260 },
    
            { top: 220, left: 280 },
            { top: 240, left: 280 },
            { top: 260, left: 280 },
            { top: 280, left: 280 },
    
            { top: 100, left: 300 },
            { top: 120, left: 300 },
            { top: 140, left: 300 },
            { top: 160, left: 300 },
            { top: 180, left: 300 },
            { top: 200, left: 300 },
            { top: 220, left: 300 },
            { top: 240, left: 300 },
            { top: 260, left: 300 },
            { top: 280, left: 300 },
            { top: 300, left: 300 },
            { top: 320, left: 300 },
    
            { top: 220, left: 320 },
            { top: 240, left: 320 },
            { top: 260, left: 320 },
            { top: 280, left: 320 },
            { top: 300, left: 320 },
    
            { top: 160, left: 340 },
            { top: 180, left: 340 },
            { top: 200, left: 340 },
            { top: 220, left: 340 },
            { top: 240, left: 340 },
            { top: 260, left: 340 },
            { top: 280, left: 340 },
            { top: 300, left: 340 },
            { top: 320, left: 340 },
    
            { top: 40, left: 360 },
            { top: 60, left: 360 },
            { top: 80, left: 360 },
            { top: 100, left: 360 },
            { top: 120, left: 360 },
            { top: 140, left: 360 },
            { top: 160, left: 360 },
            { top: 180, left: 360 },
            { top: 200, left: 360 },
            { top: 220, left: 360 },
            { top: 240, left: 360 },
            { top: 260, left: 360 },
            { top: 280, left: 360 },
            { top: 300, left: 360 },
            { top: 320, left: 360 }
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
    $("#start-button").one("click", function() {
        difficulty = document.getElementById("difficulty-select").value
        createMaze(difficulty)
        for (var i = 0; i < wallCoordinates.length; i++) {
            $('#maze').append('<div class="wall" style="top: ' + wallCoordinates[i].top + 'px; left: ' + wallCoordinates[i].left + 'px;"></div>');
        }
    
        // Create the player and append it to the board
        $('#maze').append('<div class="player" id="player" style="top: ' + playerY + 'px; left: ' + playerX + 'px;"></div>')
        // Timer starts when start button is pressed
        setInterval(function() {
            $("#seconds").html(pad(++sec%60));
            $("#minutes").html(pad(parseInt(sec/60,10)));
        }, 1000);
    })
    // Timer functionality
    var sec = 0;
    function pad(val) {
        return val > 9 ? val : "0" + val;
    }
})
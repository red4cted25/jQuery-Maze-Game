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
    var wallCoordinates = [
        {top:20, left:40},//wall 1
        {top:20, left:100},//wall 2
        {top: 20, left: 160},
        //Add more walls here and in the scss
    ]

    for (var i = 0; i < wallCoordinates.length; i++) {
        $('#maze').append('<div class="wall" style="top: ' + wallCoordinates[i].top + 'px; left: ' + wallCoordinates[i].left + 'px;"></div>');
    }

    // Create the player and append it to the board
    $('#maze').append('<div class="player" id="player" style="top: ' + playerY + 'px; left: ' + playerX + 'px;"></div>')
})
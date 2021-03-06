let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 32
let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
} // put snake at the middle
let direction = "right"
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function createBackGround() {
    context.fillStyle = "lightblue"
    context.fillRect(0, 0, 16*box, 16*box)
}

function createSnake() {
    for (i = 0; i < snake.length; i++){
        context.fillStyle = "blue"
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function drawFood() {
    context.fillStyle = "pink"
    context.fillRect(food.x, food.y, box, box)
}

function runSnake() {
    let snakeX = snake[0].x
    let snakeY = snake[0].y
    
    if (direction == "right") snakeX += box
    else if (direction == "left") snakeX -= box
    else if (direction == "up") snakeY -= box
    else snakeY += box

    if (snakeX != food.x || snakeY != food.y){
        snake.pop()
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead)
}

function getSnakeOtherSide() {
    if (snake[0].x > 15*box && direction == "right") snake[0].x = 0
    else if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box
    else if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box
    else if (snake[0].y > 15*box && direction == "down") snake[0].y = 0
}

document.addEventListener('keydown', update)

function endGame() {
    for (i = 1; i < snake.length; i++){
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game)
            alert("GAME OVER :-(")
        }
    }
}

function update(event) {
    // 37: arrow left, 38: arrow up, 39: arrow right, 40: arrow down
    if (event.keyCode == 37 && direction != "right") direction = "left"
    else if (event.keyCode == 38 && direction != "down") direction = "up"
    else if (event.keyCode == 39 && direction != "left") direction = "right"
    else if (event.keyCode == 40 && direction != "up") direction = "down"
}

function initiateGame() {
    endGame()
    createBackGround()
    createSnake()
    drawFood()
    runSnake()
    getSnakeOtherSide()
}

let game = setInterval(initiateGame, 100) // "restart" game to make sure it doesnt lag




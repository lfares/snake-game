let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 32
let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
} // put snake at the middle

let direction = "right"

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

function initiateGame() {
    createBackGround()
    createSnake()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (direction == "right") snakeX += box
    else if (direction == "left") snakeX -= box
    else if (direction == "up") snakeY -= box
    else snakeY += box

    snake.pop()
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead)
}

let game = setInterval(initiateGame, 100) // "restart" game to make sure it doesnt lag




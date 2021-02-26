document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    let square = event.target
    let position = square.id

    if (handleMove(position)) {

        setTimeout(() => {
            if (playerTime == 0) {
                alert(`O vencedor foi o PLAYER 1`)
            } else {
                alert(`O vencedor foi o PLAYER 2`)
            }
        }, 100)
    }

        upDateSquare()
    }


function upDateSquare() {
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        position = square.id
        let symbol = board[position]

        if (symbol != '') {
            square.innerHTML = `<div class = ${symbol}></div>`
        }
    })
}

function refresh() {
    location.reload()
}

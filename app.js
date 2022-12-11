const dice = document.getElementById('dice') //targetDiv
const startBtn = document.getElementById('startBtn')
const restartBtn = document.getElementById('restartBtn')
const startMsg = document.getElementById('startMsg')
const startText = document.getElementById('startText')
const beginMsg = document.getElementById('beginMsg')
let score = 0
let scoreCount = document.getElementById('scoreCount')
let min = 1
let max = 24

const diceRotation = { //this links to the axis of each side of the dice ass stated on css
    1: { x: 0, y: 0 },
    2: { x: 180, y: 0 },
    3: { x: 0, y: -90 },
    4: { x: 0, y: 90 },
    5: { x: -90, y: 0 },
    6: { x: 90, y: 0 },
}

//hide OR show dice until start is pressed
startBtn.addEventListener('click', () => {
    dice.style.display = 'flex'
    startBtn.style.display = 'none'
    beginMsg.style.display = 'none'
    startMsg.textContent = 'Click on the dice to roll'
    startText.style.display = 'flex'
    restartBtn.style.display = 'flex'
})


//
dice.addEventListener('click', () => { //this is the actual function of the dice
    const rollDice = (Math.ceil(Math.random() * 6))
    const xRand = getRandom(max, min)
    const yRand = getRandom(max, min)
    dice.style.transform = 'rotateX(' + (diceRotation[rollDice].x + xRand) + 'deg) rotateY(' + (diceRotation[rollDice].y + yRand) + 'deg)'
    console.log(rollDice)

    score += rollDice

    if (score >= 20) {
        beginMsg.style.display = 'flex'
        beginMsg.textContent = 'Congrats you won yay'
    } else if (score == 1) {
        beginMsg.style.display = 'flex'
        beginMsg.textContent = 'soz loser bye', 'press restart to reset the game'
    }


    setTimeout(() => {
        scoreCount.textContent = `Score: ${score}`
    }, 5000 //miliseconds
    )
})
/*The code is a function that takes in two numbers, max and min.
It then creates a random number between those two numbers using the Math.random() function.
The code then uses getRandom to create an xRand variable which is used to rotate the dice by degrees on its X axis (the left side).
The code first checks if rollDice equals 1 or 2 or 3.
If it does, it sets the transform property of the dice element to 'rotateX(0deg) rotateY(0deg)' .
Otherwise, if rollDice equals 4 or 5, it sets the transform property of the dice element to 'rotateX(-180deg) rotateY(0deg)' .
Finally, if rollDice equals 6, it sets the transform property of the dice element to 'rotateX(0deg) rotateY(90deg)'
The code would produce the following outcome: dice.style.transform = 'rotateX(' + (diceRotation[rollDice].x + xRand) + 'deg) rotateY(' + (diceRotation[rollDice].y + yRand) + 'deg)' */

function getRandom() { //this allows the dice to roll and appear at a certain dice side
    return Math.ceil(Math.random() * 5) * 360;
} //this returns a random number between 05 and multiplpied by 360 degrees


restartBtn.addEventListener('click', () => {
    window.location.reload()
})
console.log(restartBtn)


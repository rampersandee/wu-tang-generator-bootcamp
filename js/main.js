// COLLABORATORS Ludjy, Amaury, Malik
// VARIABLES 1
let genButton = document.querySelector('button')

// BUTTONS
genButton.addEventListener('click', calculatePoints)

// FUNCTIONS
function calculatePoints() {
    // VARIABLES 2
    let fName = document.querySelector('#fname').value
    let lName = document.querySelector('#lname').value
    let faveColor = document.querySelector('#fave-color').value
    let faveAnimal = document.querySelector('#fave-animal').value
    let lastDate = document.querySelector('#last-date').value
    let pointSystem = 0
    
    // CONDITIONALS
    if (fName.length <= 3) {
        pointSystem += 0
    } else if (fName.length <= 6) {
        pointSystem += 1
    } else if (fName.length <= 9) {
        pointSystem += 2
    } else if (fName.length <= 12) {
        pointSystem += 3
    }

    if (lName.charAt(0).toLowerCase() <= 'f') {
        pointSystem += 0
    } else if (lName.charAt(0).toLowerCase() <= 'l') {
        pointSystem += 1
    } else if (lName.charAt(0).toLowerCase() <= 'r') {
        pointSystem += 2
    } else {
        pointSystem += 3
    }

    if (faveColor.toLowerCase() === 'red') {
        pointSystem += 0
    } else if (faveColor.toLowerCase() === 'blue') {
        pointSystem += 1
    } else if (faveColor.toLowerCase() === 'yellow') {
        pointSystem += 2
    } else if (faveColor.toLowerCase() === 'green') {
        pointSystem += 3
    }

    if (faveAnimal.length <= 3) {
        pointSystem += 0
    } else if (faveAnimal.length <= 6) {
        pointSystem += 1
    } else if (faveAnimal.length <= 9) {
        pointSystem += 2
    } else if (faveAnimal.length <= 12) {
        pointSystem += 3
    }

    if (lastDate.value >= 4) {
        pointSystem += 0
    } else if (lastDate.value <= 4 && lastDate.value >= 2) {
        pointSystem += 1
    } else if (lastDate.value <= 2 && lastDate.value >= 1) {
        pointSystem += 2
    }
    else {
        pointSystem += 3
    }
    gCheckTotal(pointSystem)
}

function gCheckTotal(pointSystem) {
    let wutangNameResults = document.querySelector('#results1')
    let wutangSongResults = document.querySelector('#results2')
    fetch(`/api?pointSystem=${pointSystem}`)
        .then(res => res.json())
        .then(wutangName => {
            console.log(wutangName)

            wutangNameResults.innerText = wutangName.name
            wutangSongResults.innerText = wutangName.song
        })
}
//uchwyty do wyników graczy
const playerPoints = document.querySelector('.playerPoints')
const computerPoints = document.querySelector('.computerPoints')
//uchwyt do wszystkich buttonów
const buttons = document.querySelectorAll('button')
//uchwyty do przycisków
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
//uchwyty do wyborów
const yourChoise = document.querySelector('.yourChoise')
const computerChoise = document.querySelector('.computerChoise')
//uchwyty do rezultatów
const winAlert = document.querySelector('.winAlert')
const lostAlert = document.querySelector('.lostAlert')
const drawAlert = document.querySelector('.drawAlert')
//uchwyt do przycisku resetującego
const resetBtn = document.querySelector('.resetBtn')
//tablica z opcjami dla komputera
const options = ['kamień', 'papier', 'nożyce']

//Wybranie kamienia przez gracza
const rockFunction = () => {
    const computerOption = options[Math.floor(Math.random()*options.length)];
    const userOption = 'kamień'
    resetBtn.classList.remove('disable')

    if(computerOption == 'nożyce'){
        alertsFunction()
        winAlert.classList.toggle('disable')
        yourChoise.textContent = `Wybrałeś/aś: ${userOption}`
        computerChoise.textContent = `Komputer wybrał: ${computerOption}`   
        winAddPoints()

    }else if(computerOption == 'papier'){
        alertsFunction()
        lostAlert.classList.toggle('disable')
        yourChoise.textContent = `Wybrałeś/aś: ${userOption}`
        computerChoise.textContent = `Komputer wybrał: ${computerOption}`
        lostAddPoints()

    }else if(computerOption =='kamień'){
        alertsFunction()
        drawAlert.classList.toggle('disable')
        yourChoise.textContent = `Wybrałeś/aś: ${userOption}`
        computerChoise.textContent = `Komputer wybrał: ${computerOption}`
        remisAddPoints()
    }
}
//Wybranie papieru przez gracza
const paperFunction = () => {
    const computerOption = options[Math.floor(Math.random()*options.length)];
    const userOption = 'papier'
    resetBtn.classList.remove('disable')

    if(computerOption == 'kamień'){
        alertsFunction()
        winAlert.classList.toggle('disable')
        yourChoise.textContent = `Wybrałeś/aś: ${userOption}`
        computerChoise.textContent = `Komputer wybrał: ${computerOption}`  
        winAddPoints()
        
    }else if(computerOption == 'nożyce'){
        alertsFunction()
        lostAlert.classList.toggle('disable')
        yourChoise.textContent = `Wybrałeś/aś: ${userOption}`
        computerChoise.textContent = `Komputer wybrał: ${computerOption}`
        lostAddPoints()

    }else if(computerOption =='papier'){
        alertsFunction()
        drawAlert.classList.toggle('disable')
        yourChoise.textContent = `Wybrałeś/aś: ${userOption}`
        computerChoise.textContent = `Komputer wybrał: ${computerOption}`
        remisAddPoints()
    }
}
//Wybranie nożyc przez gracza
const scissorsFunction = () => {
    const computerOption = options[Math.floor(Math.random()*options.length)];
    const userOption = 'nożyce'
    resetBtn.classList.remove('disable')

    if(computerOption == 'papier'){ 
        alertsFunction()
        winAlert.classList.toggle('disable')
        yourChoise.textContent = `Wybrałeś/aś: ${userOption}`
        computerChoise.textContent = `Komputer wybrał: ${computerOption}`    
        winAddPoints()

    }else if(computerOption == 'kamień'){
        alertsFunction()
        lostAlert.classList.toggle('disable')
        yourChoise.textContent = `Wybrałeś/aś: ${userOption}`
        computerChoise.textContent = `Komputer wybrał: ${computerOption}`
        lostAddPoints()

    }else if(computerOption =='nożyce'){
        alertsFunction()
        drawAlert.classList.toggle('disable')
        yourChoise.textContent = `Wybrałeś/aś: ${userOption}`
        computerChoise.textContent = `Komputer wybrał: ${computerOption}`
        remisAddPoints()
    }
}
//funkcja wyświetlająca alert o zwycięstwie/remisie/porażce
const alertsFunction = () => {
    winAlert.classList.add('disable')
    lostAlert.classList.add('disable')
    drawAlert.classList.add('disable')
}
//funkcja dodająca punkty w przypadku remisu
const remisAddPoints = () => {
        let x = parseFloat(playerPoints.textContent)
        let y = parseFloat(computerPoints.textContent)
        x += 1
        y += 1
        playerPoints.textContent = x
        computerPoints.textContent = y
}
//funkcja dodająca punkty w przypadku wygranej
const winAddPoints = () => {
        let x = parseFloat(playerPoints.textContent)
        x += 1
        playerPoints.textContent = x
}
//funkvja dodająca punkty w przypadku przegranej
const lostAddPoints = () => {
        let x = parseFloat(computerPoints.textContent)
        x += 1
        computerPoints.textContent = x
}
//funkcja resetujaca grę
const resetFunction = () => {
    playerPoints.textContent = '0'
    computerPoints.textContent = '0'
    yourChoise.textContent = 'Wybrałeś/aś:'
    computerChoise.textContent = 'Komputer wybrał:'
    winAlert.classList.add('disable')
    lostAlert.classList.add('disable')
    drawAlert.classList.add('disable')
    resetBtn.classList.add('disable')
}
//nasłuchiwacze na poszczególne przyciski
rock.addEventListener('click', rockFunction)
paper.addEventListener('click', paperFunction)
scissors.addEventListener('click', scissorsFunction)
resetBtn.addEventListener('click', resetFunction)



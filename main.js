// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const btn = document.querySelector("button")
const txt = ['Siema, siema', 'Kurwa co tam', 'Ogień z kurwami!', 'Seks z pedałami']



// Implementacja
let tableIndex = 0
let textIndex = 0;



const addLetter = () => {
    btn.disabled = true
    if (textIndex >= 0) {
    spnText.textContent += txt[tableIndex][textIndex] }
        textIndex++;
    
    if (textIndex === txt[tableIndex].length) {
        tableIndex++;
        if (tableIndex === txt.length) return setTimeout(() => {
            spnText.textContent = "";
            tableIndex = 0
            textIndex = 0
            btn.disabled = false
        }, 2000)
        return setTimeout(() => {
        textIndex = -3;
        spnText.textContent = "";
        addLetter();
        }, 1000)  
    }
    setTimeout(addLetter, 100)
    }

    

// addLetter(); //pierwsze wywołanie
// const changeWord = () => {

// }
// setTimeout(changeWord,1000)


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');  
}

setInterval(cursorAnimation, 400)


btn.addEventListener("click", addLetter)
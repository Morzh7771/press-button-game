const keyses = {
    A : 65,
    B : 66,
    C : 67,
    D : 68,
    E : 69,
    F : 70,
    G : 71,
    H : 72,
    I : 73,
    J : 74,
    K : 75,
    L : 76,
    M : 77,
    N : 78,
    O : 79,
    P : 80,
    Q : 81,
    R : 82,
    S : 83,
    T : 84,
    U : 85,
    V : 86,
    W : 87,
    X : 88,
    Y : 89,
    Z : 90,
}
const ruskeyses = {
    А: 70,
    Б: 188,
    В: 68,
    Г: 85,
    Д: 76,
    Е: 84,
    Ё: 220,
    Ж: 186,
    З: 80,
    И: 66,
    Й: 81,
    К: 82,
    Л: 75,
    М: 86,
    Н: 89,
    О: 74,
    П: 71,
    Р: 72,
    С: 67,
    Т: 78,
    У: 69,
    Ф: 65,
    Х: 219,
    Ц: 87,
    Ч: 88,
    Ш: 73,
    Щ: 79,
    Ъ: 221,
    Ы: 83,
    Ь: 77,
    Э: 222,
    Ю: 190,
    Я: 90,
}
let pb = 0
let trash = confirm("Включить эпилепсию")
let langeage = prompt("Выбирите Русский или Английский")
while(true){
if(langeage === "Русский"){
    break
}else if(langeage === "Английский"){
    break
}else{
    langeage = prompt("Выбирите Русский или Английский напиши с большой буквы как я написал")
}
}

alert("Жизни это кличество ошибок который ты сможешь допустить время это время за которые ты должен успеть нажать на букву английского алфавита в случае успеха ты получаешь + 1 бал а в случае провала теряешь жизнь если жизней становиться 0 ты проиграл и теряешь все очки")
let score = 0
let dificulty = parseInt(prompt("Выставь задержку в секундах"))
while (isNaN(dificulty) || dificulty === 0){
    if (dificulty === 0 ){
        dificulty = parseInt(prompt("0 секунд а ты блять умный"))
    }else{
    dificulty = parseInt(prompt("Выставь задержку в секундах В СЕКУНДАХ ЭТО БЛЯТЬ ЦЫФРА ДАУН")) 
    }
}
let life = parseInt(prompt("Выставь сколько у тебя будет жизней"))
while (isNaN(life) || life === 0){
    if (life === 0 ){
        life = parseInt(prompt("0 жизей а ты блять умный"))
    }else{
    life = parseInt(prompt("Выставь сколько у тебя будет жизней ЖИЗНИ ЭТО БЛЯТЬ ЦЫФРА ДАУН")) 
    }
}

let newlife = life
let leather 
let button 
function words(X){
    for(let keyse in keyses){
        if(keyses[keyse] === X){
            leather = keyse
            return leather
        }
    }
}
function wordsRus(X){
    for(let ruskeyse in ruskeyses){
        if(ruskeyses[ruskeyse] === X){
            leather = ruskeyse
            return leather
        }
    }
}
let last_button
let color
let numToLengt
function generateGame(){
    if(langeage === "Английский"){
    button = Math.floor(Math.random() * (90 - 65) + 65)
    }else if(langeage === "Русский"){
        button = Math.floor(Math.random() * (97 - 65) + 65)
        if(button === 91){
            button = 188
        }else if(button === 92){
            button = 220
        }else if(button === 93){
            button = 186
        }else if(button === 94){
            button = 219
        }else if(button === 95){
            button = 221
        }else if(button === 96){
            button = 222
        }else if(button === 97){
            button = 190
        }
    }
    if(last_button === button){
        if(langeage === "Английский"){
            button = Math.floor(Math.random() * (90 - 65) + 65)
            }else if(langeage === "Русский"){
                button = Math.floor(Math.random() * (97 - 65) + 65)
                if(button === 91){
                    button = 188
                }else if(button === 92){
                    button = 220
                }else if(button === 93){
                    button = 186
                }else if(button === 94){
                    button = 219
                }else if(button === 95){
                    button = 221
                }else if(button === 96){
                    button = 222
                }else if(button === 97){
                    button = 190
                }
                
            }
    }
    console.log(button)
    last_button = button;
    if(trash === true){
    color = "#" + Math.floor(Math.random() * 16_000_000).toString(16);
    document.body.style.background = color;
    }
    if(langeage === "Английский"){
    numToLengt = words(button)
    }else if(langeage === "Русский"){
        numToLengt = wordsRus(button)
    }
    document.getElementById("button").textContent = "Нажми кнопку: " + numToLengt
    document.getElementById("life").textContent = "life:" + life
    clearInterval(timerInterval)
    timer(dificulty)    
}

let confirms

document.addEventListener('keydown', (event) => {
    if (event.keyCode === button) {
        score++
        document.getElementById("score").textContent = "Score:" + score
        
        generateGame()
    }else{
        life--
        document.getElementById("life").textContent = "life:" + life
        if(life <= 0){
            if(score > pb){
            pb = score
            }
            document.getElementById("life").textContent = "life:" + life
            alert("ты проебал попробуй ещё раз твои очки: " + score + " Твой лучший счёт: "+pb)
            score = 0
            document.getElementById("score").textContent = "Score:" + score
            generateGame()
            life = newlife
            document.getElementById("life").textContent = "life:" + life
            }
        }
})
let timerInterval

function timer(time){
    document.getElementById("time").textContent = time
    timerInterval = setInterval(() =>{
        if(time >= 0){
            time = time - 0.1;
            document.getElementById("time").textContent = time.toFixed(1)
            
        }else{
            clearInterval(timerInterval)
            if(score > pb){
                pb = score
            }
            alert("ты проебал попробуй ещё раз твои очки: " + score + "Твой лучший счёт:"+pb)
            score = 0
            document.getElementById("score").textContent = "Score:" + score
            generateGame()
            life = newlife
            document.getElementById("life").textContent = "life:" + life
            return true
            
        }
    },100)
}
generateGame();
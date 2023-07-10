let cards = []
let sum = 0;
let hasBlackjack = false
let message

let messageEl = document.getElementById("message-el")
let buttonEl = document.getElementById("btnel")
let sumEl = document.querySelector(".sumel") 
let cardsEl = document.getElementById("cardsel")

let player = {
    keys : 2,
    name : "per",
    Chips : 145
}


let moneyel = document.querySelector("#player-el")


// let newcard = document.getElementById("newCard")

function startgame(){
    if(player.Chips<0){
        messageEl.textContent = "You Ran Out Of CHIPS DUMBASS YOU ARE KICKED OUT OF THE GAME!!!"
        return
    }
    moneyel.textContent =player.name +": $"+ player.Chips
    isAlive = true
    hasBlackjack = false
    let firstCard = getRendomCard()
    let secondCard = getRendomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    render_game()
}

function getRendomCard(){
    let thenum = Math.floor( Math.random()*13 ) + 1
    if(thenum === 1){
        return 11;
    }
    else if(thenum>10){
        return 10
    }
    else{
        return thenum
    }
}


function render_game(){
    
    cardsEl.textContent = "CARDS: "
    sumEl.textContent = "SUM: " + sum
    for(let i = 0; i<cards.length;i++){
    
        cardsEl.textContent +=  cards[i] + " "
    }
    
    if(sum < 21){
        
        
        messageEl.style.color = "white";
        messageEl.textContent = "do you wish to pick a card?"
    } 
    else if(sum === 21){
        player.Chips += 100
        sumEl.textContent = "SUM: " + sum
        messageEl.style.color = "yellow"
        messageEl.textContent = "You Got BlackJack"
        hasBlackjack = true
        moneyel.textContent =player.name +": $"+ player.Chips
        
    }
    else {
        player.Chips -= 50
        sumEl.textContent = "SUM: " + sum 
        messageEl.style.color = "Red"
        messageEl.textContent = "You Lose"
        isAlive = false;
        moneyel.textContent =player.name +": $"+ player.Chips
        if(player.Chips < 0){
            messageEl.textContent = "Your Luck Is As Pathetic as You"
        }
    }
}

function newCard(){
    if(isAlive && hasBlackjack === false){
        let card = getRendomCard()
        sum += card
        cards.push(card)
        render_game()
    }
    console.log(isAlive+" "+ hasBlackjack)
}
console.log(message)
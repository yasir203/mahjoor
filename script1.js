function game(){ 
    const cardArray=[ 
        { name:'1', img:'Oggy.jpg' }, 
        { name:'1', img:'Oggy.jpg' }, 
        { name:'2', img:'Shinchan.jpg' }, 
        { name:'2', img:'Shinchan.jpg' }, 
        { name:'3', img:'doramon.jpg'}, 
        { name:'3', img:'doramon.jpg'},
        { name:'4', img:'lion.jpg' }, 
        { name:'4', img:'lion.jpg' }, 
        { name:'5', img:'minion.jpg' }, 
        { name:'5', img:'minion.jpg' },
        { name:'6', img:'jerry.jpg' }, 
        { name:'6', img:'jerry.jpg' }, 
        { name:'7', img:'tom.jpg' }, 
        { name:'7', img:'tom.jpg' }, 
        { name:'8', img:'tweet.jpg' },
        { name:'8', img:'tweet.jpg'}]; 
    cardArray.sort(() => 0.5 - Math.random());
    const grid = document.querySelector('.grid') ;
    const resultDisplay=document.querySelector('#result');
    var cardsChosen = []; 
    var cardsChosenId = []; 
    var cardsWon = [];
//board
function createBoard(){ 
    grid.innerHTML=""; 
    for(let i=0; i < cardArray.length; i++) { 
        var card = document.createElement('img'); 
        card.setAttribute('src','peru.jpg'); 
        card.setAttribute('data-id',i); 
        card.addEventListener('click', flipcard); 
        grid.appendChild(card);
}
}
//check if the cards are matched 
function checkForMatch(){ 
    var cards=document.querySelectorAll('img'); 
    const optionOneId=cardsChosenId[0]; 
    const optionTwoId=cardsChosenId[1]; 
    if(cardsChosen[0]==cardsChosen[1]) { 
        window.alert("Match Found!"); 
        cards[optionOneId].setAttribute('src','wh.jpg'); 
        cards[optionTwoId].setAttribute('src','wh.jpg'); 
        cardsWon.push(cardsChosen);
    } 
    else{ 
        cards[optionOneId].setAttribute('src','peru.jpg'); 
        cards[optionTwoId].setAttribute('src','peru.jpg');
    }
    //clearing the cards chosen array and id array 
    cardsChosen=[];
    cardsChosenId=[]; 
    resultDisplay.textContent=cardsWon.length; 
    if(cardsWon.length==cardArray.length/2){ 
        resultDisplay.textContent=" Congratulations You Won!!"; 
        window.alert(" Hurray!!!!!You Won!!!");
        clearTimeout(x); //clear the time as soon as game over
    }
}
//Flip your card 
function flipcard(){ 
    var cardId=this.getAttribute('data-id'); 
    cardsChosen.push(cardArray[cardId].name); 
    cardsChosenId.push(cardId); 
    this.setAttribute('src',cardArray[cardId].img); 
    if(cardsChosen.length ==2){ 
        setTimeout(checkForMatch,650);//buffer time for 650 ms
    } 
}

createBoard()
} var x;
function countdown(seconds){ 
    clearTimeout(x); 
    function tick(){ 
        var timer=document.getElementById("timer"); seconds--;
        timer.innerHTML=(seconds < 10 ?"0":"")+String(seconds)+"seconds"; 
        if(seconds > 0){ 
            x=setTimeout(tick,1000) //1000ms=1 sec
        }
        else{ 
            window.alert("Oops !!! Game Over ! "); var grid = document.querySelector('.grid'); 
            grid.innerHTML = '';
        } 
    } 
    tick(); //call to the function tick
}

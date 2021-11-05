console.log("tic tac toe");
let music =new Audio("music.mp3")
let aduioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn="X"
let isgameover=false;
var moves=0

// function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

// function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            isgameover=true
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" wins"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
            boxes[e[0]].style.backgroundColor="wheat"
            boxes[e[1]].style.backgroundColor="wheat"
            boxes[e[2]].style.backgroundColor="wheat"
        }
        if(moves==9 && isgameover==false){
            document.querySelector('.info').innerText="DRAW"
            isgameover=true
            moves=0
        }
    })
    
}
// game logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            aduioTurn.play();
            // checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
                moves++;
            }
            checkWin();
        }
    })
})

// add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    turn="X"
    isgameover=false 
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
    for (let i = 0; i < boxes.length; i++) {
        document.getElementsByClassName("box")[i].style.backgroundColor=""
    }
    moves=0
})

// computer

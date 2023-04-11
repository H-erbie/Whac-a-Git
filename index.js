// window.addEventListener('load', () => {
//     let minutes = 0;
//     let seconds = 10;
// whac.assets(minutes, seconds);
// console.log(seconds);
// })


let bridge = [];
let temp = 0;
let score = document.querySelector('.scores');
let timer = document.querySelector('.timer');
let gameOver = document.querySelector('.gameover');
let btn = document.querySelector('.btn');
gameInfo = document.querySelector('.gameover__info');
score.textContent = 0;
const whac = {
    TDs : document.querySelectorAll('td'),
    assets: function(min, sec){
        console.log(sec)
        let tDs = this.TDs;
        let counter = setInterval(()=>{
            if(sec == 0){
                sec = 59.
                min --;
            }
            (sec == 60) ? min -- : min;
            sec --;
            if(min <= 0 && sec <= 0){
                clearInterval(counter);
                clearInterval(wam);
                gameOver.classList.remove('disappear')
                gameInfo.classList.add('appear')
                btn.textContent = 'Play Again?'
                gameOver.classList.add('appear');
                
            }
            displayTimer(sec, min);
        }, 1000);;
        
        let wam = setInterval(()=>{
            if(bridge.length >= 1){

                tDs[temp].textContent = ''
                temp = 0;
            }
            temp = this.randomize();
            bridge.push(temp)
            let img = document.createElement('img');
            img.src = './git.png';
            img.className = 'img';
            tDs[temp].appendChild(img)
        },800);
        clickTd();

   
    function clickTd(){
        tDs.forEach(td => td.addEventListener('click', ()=>{
            if(td.hasChildNodes()){
                score.textContent++;
            }
        }))
    }
    
    
    function displayTimer(sec, mins){
            (sec < 10) ? sec = `0${sec}`: sec;
            (mins < 10) ? mins = `0${mins}`: mins; 
        timer.textContent = `${mins}: ${sec}`;
    }
    
},
btnn: function(){btn.addEventListener('click', () => {
    gameOver.classList.remove('appear')
    gameOver.classList.add('disappear')
   let minutes = 0;
    let seconds = 10;
    score.textContent = 0
    whac.assets(minutes, seconds);          
})},  
randomize: function(){
    return Math.floor(Math.random() * whac.TDs.length);
}
}
whac.btnn();

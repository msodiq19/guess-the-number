const num = document.querySelector('#num');
const display = document.querySelector('.display');
const time = 100000;
let secretNum = Math.round(100*Math.random())

// I'm trying to set a tie limit && I want to implement num of trials
// document.addEventListener('DOMContentLoaded',()=>{
//     setInterval(()=>{
//         const secretNum = Math.round(100*Math.random())
//         console.log(secretNum)
//     },time);
// })

num.addEventListener('input',()=>{
    const digit = Number(num.value);
    if(digit >= 1 && digit <= 100){
        display.style.display = 'block';
        if(digit < secretNum){
            console.log(`Higher!, ${digit} is less than the secret number`)
            display.innerHTML= `Higher!, ${digit} is less than the secret number`;
        }
        else if(digit > secretNum){
            console.log(`Lower!, ${digit} is greater than the secret number`)
            display.innerHTML = `Lower!, ${digit} is greater than the secret number`;
        }else{
            console.log(`Voila!, ${digit} is the secret number`)
            display.innerHTML = `Voila!, ${digit} is the secret number`;
            secretNum = Math.round(100*Math.random())
        }
        console.log(secretNum)
    }
    else if( digit == ''){
        display.style.display = 'none';
    }
    else{
        console.log('Enter a number between 1 and 100')
        display.innerHTML = 'Enter a number between 1 and 100';
    }
})
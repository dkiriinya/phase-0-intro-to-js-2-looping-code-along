// Code your solutions in this file
function writeCards(arr,eventName){
    let newArray = []
    for(let i = 0; i<arr.length; i++){    
        newArray[i] = (`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray

}

function countDown(num){
    while (num >= 0){
        console.log(num)
        num --
    }    
}


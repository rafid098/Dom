let input = document.querySelector("input")
let button = document.querySelector(".domone")
let result = document.querySelector(".domtwo")

button.addEventListener('click', function(){

    if(input.value >= 33 && input.value < 40){
        result.innerHTML = "You got D"
    }
    else if(input.value >= 40 && input.value < 50){
        result.innerHTML = "You got C"
    }
    else if(input.value >= 50 && input.value <60){
        result.innerHTML = "you got B"
    }
    else if(input.value >= 60 && input.value < 70){
        result.innerHTML ="you got A-"
    }
    else if(input.value >= 70 && input.value < 80){
        result.innerHTML = "you got A"
    }
    else if(input.value >= 80 && input.value <= 100){
        result.innerHTML = "You got A+"
    }
    else{
        result.innerHTML = "You Fail"
        result.style.color = "red"
    }
    // if(input.value>= 18){
    //     result.innerHTML = "you are adult"
    // }
    // else{
    //     result.innerHTML = "you aren't adult"
    // }
})
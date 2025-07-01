
num1Elemt = document.querySelector("#num1")
num2Elemt = document.querySelector("#num2")
resultElemt = document.querySelector("#result")



function addition(){
    n1 = Number(num1Elemt.value);
    n2 = Number(num2Elemt.value);
    console.log(typeof(n1))
   resultElemt.textContent =  n1+n2
}




function subtraction(){
     n1 = Number(num1Elemt.value);
    n2 = Number(num2Elemt.value);
    resultElemt.textContent = n1-n2
}



// division
division = ()=>{
     n1 = Number(num1Elemt.value);
    n2 = Number(num2Elemt.value);
    if(n2 != 0){
    resultElemt.textContent = n1/n2
    }else{
        resultElemt.textContent = "can't divide by ZERO"
    }
}


document.querySelector("#division").addEventListener('click', division)


// multiplication

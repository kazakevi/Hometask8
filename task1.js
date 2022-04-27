// Замыканием сделайте функцию, которая считает и выводит количество своих вызовов.

function counterFunctionCalls(){
    let count = 1;
    return function(){
       return count++;
    }
}

let counter = myCounter();
console.log(counter());
console.log(counter());
console.log(counter());
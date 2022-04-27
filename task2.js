/*
Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, 
пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - в замыкании должен хранится массив
 чисел, которые уже были сгенерированы функцией.
// */

function getRandom(){
    let arStorage = [];
    generateRandom();
    function generateRandom(){
        let check = false;
        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * 100);
            check = arStorage.includes(randomNum); 
            if (check == false) {
                arStorage.push(randomNum)
            } 
        } while (arStorage.length<99);
  



    }
    return arStorage;
}

let myAr = getRandom();
console.log(myAr)

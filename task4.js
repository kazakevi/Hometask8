//Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

function printElements(ar) {
    if(ar.length > 0){
        console.log(ar[0]);
        printElements(ar.slice(1))
      }
    }
let ar = [1,2,6,9];
printElements(ar);



// Дан массив с числами [1, -2, 3, 0, 4, -5, 6, -11]. Оставьте в нем только положительные числа.
// Затем извлеките квадратный корень и этих чисел

function positiveAndRoot(ar){
    let len = ar.length;
    let arNew= [];
    for (i=0;i<len;i++){
        if (ar[i]>0) {
            let c = Math.round(Math.sqrt(ar[i]));
            arNew.push(c)
            
        }
    }
return arNew
}

let ar = [1,-2,3,0,4,-5,6,-11];
let result = positiveAndRoot(ar);
console.log(result);
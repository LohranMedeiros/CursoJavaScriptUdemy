// Recursão

function recursivo (array, i = 0, num = -Infinity){
   if(array.length < i){
      return num;
   }
   else if (num < array[i]){
      num = array[i];
   }
      
   return recursivo (array, i+1, num);
}

let arrayNum = [1, 9, 3, 6, 8, 2, 4, 5, 7];
console.log(recursivo(arrayNum));
// 1. Найти минимальный элемент массиваa
function countMinElArray(array) {
   let min = array[0];
   for (let i = 0; i < array.length; i++) {
      if (min > array[i]) min = array[i];
   }
   return console.log(min);
}
countMinElArray([1, 66, -656, 89, 3, 12, -99, 676, -1, 55]);



// 2. Найти максимальный элемент массива
function countMaxElArray(array) {
   let max = array[0];
   for (let i = 0; i < array.length; i++) {
      if (max < array[i]) max = array[i];
   }
   return console.log(max);
}
countMaxElArray([1, 66, 189, 3, 12, 6176, -1, 55]);



// 3. Найти индекс минимального элемента массива
function findMinIndex(array) {
   let min = array[0];
   let minIndex = 0;
   for (let i = 0; i < array.length; i++) {
      if (min > array[i]) {
         min = array[i];
         minIndex = i;
      }
   }
   return console.log(min, minIndex);
}
findMinIndex([1, 66, -99, 189, 3, 12, 6176, -1, 55]);


// 4. Найти индекс максимального элемента массива
function findMaxIndex(array) {
   let max = array[0];
   let maxIndex = 0;
   for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
         max = array[i];
         maxIndex = i;
      }
   }
   return console.log(max, maxIndex);
}
findMaxIndex([1, 66, -99, 189, 3, 12, 6176, -1, 55]);


// 5. Посчитать сумму элементов массива с нечетными индексами
function contOddIndex(array) {
   let count = 0;
   for (let i = 1; i <= array.length; i++) {
      if (i % 2 !== 0) {
         count += i;
      }
   }
   return console.log(count);
}
contOddIndex([1, 66, -99, 189, 3, 12, 6176, -1, 55]);


// 6. Сделать реверс массива (массив в обратном направлении)
function reverseArray(array) {
   let newArray = [];
   for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
   }
   console.log(newArray);
}
reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


// 7. Посчитать количество нечетных элементов массива
function contOddEl(array) {
   let count = 0;
   for (let i = 1; i <= array.length; i++) {
      if (i % 2 !== 0) {
         count++;
      }
   }
   return console.log(count);
}
contOddEl([1, 3, 5, 7, 8]);




// 8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
function doubleReverse(array) {
   const breakPoint = Math.floor(array.length / 2);
   const subArray1 = [];
   const subArray2 = [];
   for (let i = 0; i < array.length; i++) {
      const element = array[i];
      breakPoint > i ? subArray1.push(element) : subArray2.push(element);
   }
   const updateArray = [].concat(subArray1.reverse(), subArray2.reverse());
   return console.log(array, updateArray);
}
doubleReverse([1, 2, 3, 4]); // по правде не совсем понял как делать данную задачу,и ответ мне подсказали
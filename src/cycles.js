// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function countEvenSum(min, max) {
   let sum = 0;
   let even = 0;
   for (let i = min; i < max; i++) {
      if (i % 2 === 0) {
         sum += i;
         ++even;
      }
   }
   return sum, even;
}


// 2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function checkSimple(number) {
   let count = 0;
   for (let i = 0; i <= number; i++) {
      if (number % i === 0) {
         count++;
      }
   }
   if (count === 2) return `${number} является простым числом`;
   return 'Это не простое число';
}
checkSimple(43);// признаю ,решение присмотрел у сокурсника так как не мог понять логики.Не хватило домыслить что надо добавить переменную которая бы посчитала делитель


/*3. Найти корень натурального числа с точностью до целого
(рассмотреть вариант последовательного подбора и метод бинарного поиска)*/
function sqr(num) {
   for (let i = 0; i < num; i++) {
      let sq = i * i;
      if (sq > num) {
         i - 1;
         return `${i - 1} это и будет наш корень`;
      }
   }
}


// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function fuctorialCount(n) {
   let result = 1;
   while (n) {
      result *= n--;
   }
   return result;
}

// console.log(fuctorialCount(6));



// 5. Посчитать сумму цифр заданного числа
function countNumber(n) {
   let sum = 0;
   let stringNum = String(n);
   for (let i = 0; i < stringNum.length; i++) {
      sum += Number(stringNum[i]);
   }
   return sum;
}
countNumber(161);


/* Вывести число, которое является зеркальным отображением последовательности
цифр заданного числа, например, задано число 123, вывести 321.*/
function reverseNumber(n) {
   let res = '';
   let reverse;
   let numString = String(n);
   for (let i = numString.length - 1; i >= 0; i--) {
      res += numString[i];
      reverse = Number(res)
   }
   return reverse;
}

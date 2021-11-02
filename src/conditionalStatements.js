// ===========================Условные операторы==============================
// Если а – четное посчитать а*б, иначе а+б
function count(a, b) {
   (a % 2 === 0 && b % 2 === 0) ? console.log(a * b) : console.log(a + b);
}
count(2, 8);

// Определить какой четверти принадлежит точка с координатами (х,у)
function showCoordinates(x, y) {
   if (isNaN(x) && isNaN(y)) {
      return;
   }
   switch (true) {
      case (x > 0 && y > 0):
         console.log('Данные координаты пренадлежат верхней правой четверти');
         break;
      case (x < 0 && y > 0):
         console.log('Данные координаты пренадлежат верхней левой четверти');
         break;
      case (x < 0 && y < 0):
         console.log('Данные координаты пренадлежат нижней левой четверти');
         break;
      case (x > 0 && y < 0):
         console.log('Данные координаты пренадлежат нижней правой четверти');
         break;
      default: console.log('Вы ввели координаты не соотвествующего формата');
         break;
   }
}
showCoordinates(10, 0);


// 3. Найти суммы только положительных из трех чисел
function positiveSum(num1, num2, num3) {
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) {
      (arguments[i] > 0) ? sum += arguments[i] : sum;
   }
   return sum;
}
console.log(positiveSum(1, -4, 15));


// Посчитать выражение (макс(а*б*с, а+б+с))+3
// я не понял как правильно реализовать данную задачу ,
// по сути надо залить в переменную x = а*б*с , y =а+б+с ,и сравнить если одна больше второй то вернет x  инначе  y ,
// но реализовать не понял как


//5 Написать программу определения оценки студента по его рейтингу, на основе следующих правил
function evaluate(raiting) {
   if (typeof raiting === 'number') {
      switch (true) {
         case (raiting > 0 && raiting <= 19): console.log('F');
            break;
         case (raiting > 19 && raiting <= 39): console.log('E');
            break;
         case (raiting > 39 && raiting <= 59): console.log('D');
            break;
         case (raiting > 59 && raiting <= 74): console.log('C');
            break;
         case (raiting > 74 && raiting <= 89): console.log('B');
            break;
         case (raiting > 89 && raiting <= 100): console.log('A');
            break;
         default: console.log('Оценка внедиапазона');
            break;
      }
   } else {
      console.log('Введите оценку в диапазоне 1-100');
   }
}
evaluate(89);


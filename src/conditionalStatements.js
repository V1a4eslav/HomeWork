// ===========================Условные операторы==============================
// Если а – четное посчитать а*б, иначе а+б
function count(a, b) {
   return (a % 2 === 0 && b % 2 === 0) ? a * b : a + b;
}
count(2, 8);

// Определить какой четверти принадлежит точка с координатами (х,у)
function showCoordinates(x, y) {
   if (isNaN(x) && isNaN(y)) {
      return;
   }
   switch (true) {
      case (x > 0 && y > 0):
         return 'Данные координаты пренадлежат верхней правой четверти';
      case (x < 0 && y > 0):
         return 'Данные координаты пренадлежат верхней левой четверти';
      case (x < 0 && y < 0):
         return 'Данные координаты пренадлежат нижней левой четверти';
      case (x > 0 && y < 0):
         return 'Данные координаты пренадлежат нижней правой четверти';
      default:
         return 'Вы ввели координаты не соотвествующего формата';
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
positiveSum(1, -4, 15);


// Посчитать выражение (макс(а*б*с, а+б+с))+3
// я не понял как правильно реализовать данную задачу ,
// по сути надо залить в переменную x = а*б*с , y =а+б+с ,и сравнить если одна больше второй то вернет x  инначе  y ,
// но реализовать не понял как


//5 Написать программу определения оценки студента по его рейтингу, на основе следующих правил
function evaluate(raiting) {
   if (typeof raiting === 'number') {
      switch (true) {
         case (raiting > 0 && raiting <= 19): return 'F';
         case (raiting > 19 && raiting <= 39): return 'E';
         case (raiting > 39 && raiting <= 59): return 'D';
         case (raiting > 59 && raiting <= 74): return 'C';
         case (raiting > 74 && raiting <= 89): return 'B';
         case (raiting > 89 && raiting <= 100): return 'A';
         default: return 'Оценка внедиапазона';
      }
   }
   return 'Вы ввели не число';
}
evaluate(77);


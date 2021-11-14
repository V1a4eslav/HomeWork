// 1.Составьте алгоритм, который считает, сколько времени вам нужно на
// приготовление яиц. Правила:
// -Яйца варить 5 минут
// -Вместительность емкости не более 5 яиц одновременно
function getCookingTime(eggsAmount) {
   let result = Math.ceil(eggsAmount / 5) * 5;
   return result;
}
getCookingTime(0); //returns 0
getCookingTime(5); //returns 5
getCookingTime(9); //returns 10 (because capacity is 5 so we need to do it 2 times)


// 2.Получая массив чисел.Все они либо нечетные, либо четные, кроме
// одного.Тебе нужно его найти.
function getNumber(array) {
   let evenArray = array.filter(el => el % 2 === 0);
   if (evenArray.length === 1) {
      return evenArray[0];
   } else {
      return array.find(el => el % 2 !== 0);
   }
}
console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));
console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]));


// 3. Принимая массив объектов и случайную строку.У объектов может
// быть ключ: «title» с разными значениями.Создайте алгоритм, который
// фильтрует массив, заданный как первый параметр, и возвращает
// массив объектов, которые содержат в своих заголовках заданную строку
// в качестве второго параметра(без учета регистра).
const arr = [
   { title: "Some title1" },
   { Title: " like JS!" },
   { user: "This obj doesn’t have key title js" },
   { title: "Js - is the best!" },
];
const newArr = [];
function filterTitle(array, subString) {
   array.forEach(element => {
      const arrEntriers = Object.entries(element);
      for (const [key, value] of arrEntriers) {
         // не знал как отфильтровать значение чтоб нашло js в любом регистре,
         // по этому обратился к соскурснику и он подсказал данной идеей
         // я намеренно поменял регистр ключя вовтором свойстве.
         // так как в условии сказано найти все тайтлы в малом регистре,
         // а вариант уменьшаться через JSON.parse((JSON.stringify(arr).toLoverCase()
         // это не вариант  так как он уменшит и регистр ключа  
         if (key === 'title' && value.toLowerCase().includes(subString.toLowerCase())) {
            newArr.push(arrEntriers);
         }
      }
      return newArr;
   });
}
filterTitle(arr, 'js')
console.log(newArr);



// 4. Принимая строку, ваша функция должна вернуть обьект, в котором
// ключи – символы строки, значение – количество повторений символов в
// строке
function countCharacters(string) {
   const result = {};
   const arrString = string.split('');
   arrString.forEach(element => {
      result[element] = (arrString.filter(item => item === element).length);
   });
   return result;
}
console.log(countCharacters('sppparrow'));


// 5. Принимая число, ваша функция должна найти следующий
// положительный палиндром большего размера.
function getNextPalindrome(number) {
   number++;
   const numberReverse = +(number.toString().split("").reverse().join(""));
   while (true) {
      if (numberReverse === number && number > 10) {
         return number;
      } else {
         number++;
      }
   }
}
console.log(getNextPalindrome(100));


// 6. Создать структуру данных Set, используя объект, создать методы add, remove, has
function createSet(array) {
   let mySet = [];
   array.forEach(item => {
      if (!mySet.includes(item)) {
         mySet.push(item)
      };
   });
   mySet = mySet.reduce((acc, item, index) => {
      acc[index + 1] = item;
      return acc;
   }, {});
   //add
   mySet.add = function (value) {
      if (!Object.values(mySet).includes(value)) {
         return mySet[value] = value;
      }
   }
   //has
   mySet.has = function (value) {
      return Object.values(mySet).includes(value);
   };
   //remove
   mySet.remove = function (value) {
      if (Object.values(mySet).includes(value)) {
         return delete mySet[value];
      }
   }
   return mySet;
}
// данную задачу не смог сам решить,ток с помощью сокурсников
// оказалось не так сложно , но увы сам не додумался

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
function filterTitle(array, subString) {
   const newArr = [];
   array.forEach(element => {
      const arrEntriers = Object.entries(element);
      for (const [key, value] of arrEntriers) {
         if (key === 'title' && value.toLowerCase().includes(subString.toLowerCase())) {
            newArr.push(element);
         }
      }
   });
   return newArr;
}
console.log(filterTitle([
   { title: "Some title1" },
   { title: " like JS!" },
   { user: "This obj doesn’t have key title js" },
   { title: "Js - is the best!" }
], 'js'));



// 4. Принимая строку, ваша функция должна вернуть обьект, в котором
// ключи – символы строки, значение – количество повторений символов в
// строке
function countCharacters(string) {
   let result = {};
   let arrString = string.split('');
   arrString.forEach(element => {
      result[element] = (arrString.filter(item => item === element).length);
   });
   return result;
}
console.log(countCharacters('sppparrow'));


// 5. Принимая число, ваша функция должна найти следующий
// положительный палиндром большего размера.
const getNextPalindrome = (number) => {
   const minPalindrome = 11;
   if (number > 10) {
      number++;
      while (true) {
         if (
            number.toString().split('').reverse().join('') == number) {
            return number;
         } else {
            number++;
         }
      }
   } else {
      return minPalindrome;
   };
};


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

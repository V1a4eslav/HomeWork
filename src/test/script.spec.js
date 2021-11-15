describe('Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.', () => {
   it('передаем количество яиц', () => {
      expect(getCookingTime(11)).to.equal(15);
   })
});


describe('Получая массив чисел.Все они либо нечетные, либо четные, кроме одного.Тебе нужно его найти.', () => {
   it('передаем массив и на выходе получаем четное', () => {
      expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.equal(4);
   })
   it('передаем массив и на выходе получаем нечетное', () => {
      expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).to.equal(13);
   })
});


describe('Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.', () => {
   it('передаем массив с обьектами', () => {
      expect(filterTitle([
         { title: "Some title1" },
         { title: " like JS!" },
         { user: "This obj doesn’t have key title js" },
         { title: "Js - is the best!" },
      ], 'js')).to.eql([{ title: " like JS!" }, { title: "Js - is the best!" }]);
   })
   it('передаем массив с обьектами', () => {
      expect(filterTitle([
         { title: "Some title1" },
         { Title: " like JS!" },
         { user: "This obj doesn’t have key title js" },
         { title: "Js - is the best!" },
      ], 'js')).to.eql([{ title: "Js - is the best!" }]);
   })
});


describe(' Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке', () => {
   it('передаем строку', () => {
      expect(countCharacters('sppparrow')).to.eql(
         { s: 1, p: 3, a: 1, r: 2, o: 1, w: 1 });
   })
});


describe('Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.', () => {
   it('передаем число', () => {
      expect(getNextPalindrome(77)).to.equal(88);
   })
   it('передаем число', () => {
      expect(getNextPalindrome(100)).to.equal(101);
   })
   it('передаем число', () => {
      expect(getNextPalindrome(3)).to.equal(11);
   })
});

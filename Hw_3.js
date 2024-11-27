console.log('*** 1 ***')
// Напишите функцию, которая принимает строку и проверяет, состоит ли она только из цифр.

function checkDigitOnly(str) {
    return /^\s*\d{1,7}(,\d{3})*$/.test(str)
}
console.log(checkDigitOnly('125s4d'))
console.log(checkDigitOnly('1245789'))
console.log(checkDigitOnly('12,144785'))
console.log(checkDigitOnly('12,144'))
console.log(checkDigitOnly('124 554'))
console.log(checkDigitOnly(' 548'))
console.log(checkDigitOnly('gggvffg'))


console.log('*** 2 ***')
// Напишите функцию, которая принимает строку и возвращает количество букв

function numberOfLetters(str) {
    return str.replace(/[^a-zA-ZА-Яа-яЁё]/g, '').length
}
console.log(numberOfLetters('letter'))
console.log(numberOfLetters('12457dd'))
console.log(numberOfLetters(' lett48r'))
console.log(numberOfLetters('ФункЦия'))

  
console.log('*** 3 ***')
// Напишите функцию, которая принимает строку и возвращает количество гласных букв

function countVowels(str) {
    return (str.match(/[aeiouyAEIOUYаеёиоуыэюяАЕЁИОУЫЭЮЯ]/g) || []).length
}

console.log(countVowels('Hello, World! Привет мир!'))


console.log('*** 4 ***')
// Напишите функцию, которая принимает год и определяет, является ли он високосным

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2024))
console.log(isLeapYear(2023))

console.log('*** 5 ***')
// Напишите функцию, которая принимает двузначное число и возвращает разницу между его цифрами

function differenceBetweenDigits(num) {
    if (num < 10 || num > 99) {
      return('Число должно быть двузначным')
    }                                               // число двузначное, если условие не выполняется, то выводится предупреждение
    const tens = Math.floor(num / 10)               // извлекаем десятки и округляем до целого числа
    const units = num % 10                          // извлекаем единицы (остаток от деления)
    return Math.abs(tens - units)                   // возвращаем разницу (всегда положительное) 
  }
  
  console.log(differenceBetweenDigits(101))
  console.log(differenceBetweenDigits(92))
  console.log(differenceBetweenDigits(58))
  

console.log('*** 6 ***')
// Напишите функцию, которая принимает число и проверяет, является ли оно зеркальным

function isPalindromeNumber(num) {
    const str = num.toString()
    return str === str.split("").reverse().join("")
  }                                                    // преобразуем в строку, затем строку в массив, реверсом перевернем и джоином объединим снова в строку. Проверяем соответствует ли введеная строка перевернутой.

  console.log(isPalindromeNumber(1578))
  console.log(isPalindromeNumber(2992))
  console.log(isPalindromeNumber(44))
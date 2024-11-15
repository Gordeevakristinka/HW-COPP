console.log('*** 1 ***')
//Создайте переменные name, age, isStudent, height, hobby, favoriteNumber, isGraduated и присвойте им значения различных типов данных. Выведите в консоль типы всех этих переменных через запятую.

let name = "Кристина"; // string
let age = 32; // number
let isStudent = true; // boolean
let height = 1.60; // number (float)
let hobby = null; // object
let favoriteNumber = 7; // number
let isGraduated; // undefined (явное undefined)

console.log(typeof name + ", " + 
    typeof age + ", " + 
    typeof isStudent + ", " + 
    typeof height + ", " + 
    typeof hobby + ", " + 
    typeof favoriteNumber + ", " + 
    typeof isGraduated);

console.log('*** 2 ***')
//Создайте переменные, содержащие явное undefined, неявное undefined и null, и выведите их типы в консоль через ||

let explicitUndefined = undefined; // явное undefined
let implicitUndefined; // неявное undefined
let myNull = null; // null

console.log(typeof explicitUndefined, typeof implicitUndefined, typeof myNull); // выведет: "undefined || undefined || object"

console.log('*** 3 ***')
//Создайте переменные для вашего года рождения и текущего года, а затем вычислите и выведите в консоль ваш текущий возраст. Формат вывода: Привет, мне {вычисленный возраст} лет.

let birthYear = 1992; // Год рождения
let currentYear = new Date().getFullYear(); // Текущий год

let currentAge = currentYear - birthYear; // Вычисляем возраст

console.log(`Привет, мне ${currentAge} года.`);

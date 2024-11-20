console.log('*** 1 ***')
/* Напишите код, который: 
Присваивает переменной число с плавающей точкой, например, 7.3.
Создаёт три переменные, в которых будет храниться это число, округлённое:
В большую сторону.
В меньшую сторону.
До ближайшего целого числа.
Выведите все три результата в консоль.*/

let number = 7.3

// Округление
let roundedUp = Math.ceil(number)      // в большую сторону
let roundedDown = Math.floor(number)     // в меньшую сторону
let roundedNearest = Math.round(number)    // до ближайшего целого числа

console.log(`Исходное число: ${number}\nОкругление в большую сторону: ${roundedUp}\nОкругление в меньшую сторону: ${roundedDown}\nОкругление до ближайшего целого числа: ${roundedNearest}`)

console.log('*** 2 ***')
/* Напишите код, который генерирует два случайных числа от 0 до 100 (без использования функций) и выводит:
Наибольшее из них.
Разницу между ними.*/

let number1 = Math.floor(Math.random() * 101) 
let number2 = Math.floor(Math.random() * 101) // генерируем случайное число, умножаем на 101, чтобы получить число в диапазоне от 0 до 100 (включительно)

let maxNumber = number1 > number2 ? number1 : number2 // ищем наибольшее из них

let difference = Math.abs(number1 - number2) // вычисляем разницу между числами, чтобы результат всегда был положительным

console.log(`Число 1: ${number1}\nЧисло 2: ${number2}\nНаибольшее число: ${maxNumber}\nРазница между числами: ${difference}`)

console.log('*** 3 ***')
/* Задано два числа: 4 и 3. Вычислите:
Их сумму, произведение и частное.
Результат возведения первого числа во вторую степень.
Квадратный корень из второго числа.
Выведите результаты на экран.*/

let num1 = 4
let num2 = 3

let sum = num1 + num2       // сумма
let product = num1 * num2   // произведение
let quotient = num1 / num2  // частное

let power = Math.pow(num1, 2)    // возведение во вторую степень

let squareRoot = Math.sqrt(num2) // квадратный корень из второго числа

console.log(`Сумма чисел: ${sum}\nПроизведение: ${product}\nЧастное: ${quotient}\nВозведение первого числа во вторую степень: ${power}\nКвадратный корень из второго числа: ${squareRoot}`)

console.log('*** 4 ***')
/* Напишите код, который:
Создаёт строку "Hello, JavaScript!" и выводит её длину.
Переводит строку в верхний и нижний регистр, а затем выводит оба варианта.
Проверяет, содержится ли в строке слово "Java" (вывод true/false).
Извлекает слово "JavaScript" и выводит его.
Убирает пробелы в начале и конце строки, если они есть.*/

let str = "Hello, JavaScript! "

console.log(`Длина строки: ${str.length}`)  // длина строки

let upperCaseStr = str.toUpperCase()    // верхний регистр
let lowerCaseStr = str.toLowerCase()    // нижний регистр

console.log(`Верхний регистр: ${upperCaseStr}\nНижний регистр: ${lowerCaseStr}`)

let containsJava = str.includes("Java") // // проверяем, содержится ли в строке слово "Java"
console.log(`Содержится ли "Java" в строке?: ${containsJava}`)

let extractedWord = str.slice(7, 17) // извлекаем слово "JavaScript"
console.log(`Извлечённое слово: ${extractedWord}`)

let trimmedStr = str.trim() // убираем пробелы в начале и в конце строки
console.log(`Строка без пробелов в начале и в конце: "${trimmedStr}"`)

console.log('*** 5 ***')
/* Напишите код, который:
Создаёт переменную с текущей датой и временем.
Получает и выводит отдельно:
Год.
Месяц.
День месяца.
День недели.
Изменяет год на следующий, а месяц на январь. Выведите изменённую дату.*/

let currentDate = new Date()

let year = currentDate.getFullYear()    // год
console.log(`Год: ${year}`)

let month = currentDate.getMonth() + 1 // // месяц
console.log(`Месяц: ${month}`)


let dayOfMonth = currentDate.getDate()  // день месяца
console.log(`День месяца: ${dayOfMonth}`)

let dayOfWeek = currentDate.getDay() - 1    // день недели (нумерация начинается с воскресенья)
console.log(`День недели: ${dayOfWeek}`)
let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
console.log(`День недели: ${daysOfWeek[dayOfWeek]}`)

currentDate.setFullYear(year + 1)   // следующий год
currentDate.setMonth(0)     // январь (месяц 0)

console.log(`Изменённая дата: ${currentDate}`)


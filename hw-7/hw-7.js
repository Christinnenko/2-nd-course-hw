// Задание 1. Преобразуйте строку js в верхний регистр JS.

let str = 'js';

console.log(str.toUpperCase());

/* Задание 2. Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, 
содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять. Пример вызова: 
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // [] */

const searchStart = (array, str) => {

    let finalArray = [];
    array.forEach((word) => {

        if (word.toLowerCase().startsWith(str.toLowerCase())) {
            finalArray.push(word);
        }
    })
    console.log(finalArray);
}


/* Задание 3. Округлите число 32.58884: До меньшего целого. До большего целого. До ближайшего целого */

let number = 32.58884;

let floorNumber = Math.floor(number);
console.log(floorNumber);

let ceilNumber = Math.ceil(number);
console.log(ceilNumber);

let roundNumber = Math.round(number);
console.log(roundNumber);

/* Задание 4. Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль. */

let array = [52, 53, 49, 77, 21, 32];

let minNumber = Math.min(...array);
console.log(minNumber);

let maxNumber = Math.max(...array);
console.log(maxNumber);


/* Задание 5. Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10. */

const displayRandomNumber = () => {
    let randomNumber = Math.ceil(Math.random() * 10);

    if (randomNumber === 0) {
        randomNumber += 1;
    }
    console.log(randomNumber);
}

displayRandomNumber();


/* Задание 6. Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел 
от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа. Пример вызова функции:

getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6
*/

const getRandomArrNumbers = (number) => {
    let resultArray = [];
    for (i = 1; i <= (Math.floor(number / 2)); i++) {
        resultArray.push(Math.floor(Math.random() * number));
    }
    return resultArray;
}

/* Задание 7. Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне. */

const getRandomInt = (num1, num2) => {
    if (num1 <= num2) {
        return Math.floor(Math.random() * (num2 - num1)) + num1;
    } else {
        return Math.floor(Math.random() * (num1 - num2)) + num2;
    }
}

getRandomInt(7, 8);


/* Задание 8. Выведите в консоль текущую дату в стандартном режиме.Используйте один из трех рассмотренных в уроке способов. */

let currentDate = new Date();
console.log(currentDate);

/* Задание 9. Создайте переменную currentDate и сохраните в нее текущую дату.Выведите дату, которая наступит через 73 дня после текущей. Подсказка: Решить эту задачу вам 
помогут 2 метода даты: getDate() и setDate(), один из методов должен быть передан в качестве параметра второму. */

let currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);


/* Задание 10. Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде: Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
Время: <часы>:<минуты>:<секунды>. Время, которое будет выведено, также хранится в объекте Date. */

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];


function displayDate(year, month, day, hours, minutes, seconds) {

    month -= 1; // отнимаем от переданного месяца -1 для правильной индексации
    let date = new Date(year, month, day, hours, minutes, seconds);
    let result = "Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()] + ". \nВремя: " + (hours > 10 ? date.getHours() : "0" + date.getHours()) + ":" + (minutes > 10 ? date.getMinutes() : "0" + date.getMinutes()) + ":" + (seconds > 10 ? date.getSeconds() : "0" + date.getSeconds());

    console.log(result);
}


/*
2) В 6 задании нужно учитывать, что не все числа делятся на 2 нацело. Также стоит в рандомизации использовать Math.floor,
 так как он округляет всегда стабильно в меньшую сторону. Round - округляет вариативно. Это же касается 7 задания. */
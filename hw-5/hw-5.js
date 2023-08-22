/* Задание 1. Напишите функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4. 
Если передадим 6 и 6, то функция должна вернуть 6. */

const compareNumbers = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}



/* Задание 2. Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное. Подсказка */

const checkParity = (number) => {
    if (number % 2 === 0) {
        return `Число четное`;
    } else {
        return `Число нечетное`;
    }
}


/* Задание 3. 
3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа. */

const countSquare = (number) => console.log(number * 2);

const countSquare2 = (number) => number ** 2;



/* Задание 4. Создайте функцию, которая: Спрашивает у пользователя, сколько ему лет.Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!». Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».
*Подсказка: можете выполнить это задание с помощью оператора  if else */


const askAge = () => {
    let age = Number(prompt('Сколько Вам лет?'));

    if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}

askAge();

/* Задание 5. Напишите функцию, которая на вход принимает 2 числа: Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и 
isNaN() помогут.) Если нет, то вернуть строку 'Одно или оба значения не являются числом'. Если оба параметра — числа, то вернуть произведение данных чисел. */

const checkCorrectNumbers = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }
    else {
        return a * b;
    }
}


/* Задание 6. Напишите функцию, которая спрашивает у пользователя число, проверяет его на корректность, после чего возводит его в куб и возвращает следующую строку: 
'n в кубе равняется <получившееся значение>'. Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'. Проверьте самостоятельно, 
что данная функция работает корректно и выводит правильный результат с параметрами от 0 до 10 включительно. */

const checkCorrectNumber = () => {
    let n = Number(prompt('Введите число'));

    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    }
    else {
        let square = n ** 3
        return `${n} в кубе равняется ${square}`;
    }
}

checkCorrectNumber();

/* Задание 7. Создайте объекты circle1 и circle2 со свойством radius. У объектов должен быть методам getArea, которое возвращает площадь круга через радиус, 
а также getPerimeter, который возвращает периметр окружности. */

const pi = 3.14;

function getCircleArea() {
    return this.radius ** 2 * pi;
}
function getCirclePerimeter() {
    return this.radius * 2 * pi;
}

const circle1 = {
    radius: 4,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 2,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
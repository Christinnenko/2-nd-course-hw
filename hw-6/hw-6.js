/* Задание 1. Дан массив: [1, 5, 4, 10, 0, 3]. Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.
После вывода значения 10 в консоль цикл должен прекратить свою работу. */

const array1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array1.length; i++) {
    if (array1[i] === 10) {
        console.log(array1[i])
        break;
    }
    console.log(array1[i]);
}



/* Задание 2. Дан массив: [1, 5, 4, 10, 0, 3]. Найдите позицию (индекс) числа 4 в этом массиве. Подсказка: Задачу можно решить методом перебора элементов
или используя метод массива indexOf. */

const array2 = [1, 5, 4, 10, 0, 3];

array2.forEach((el, index) => {
    if (el === 4) {
        console.log(index);
    }
});



// Задание 3. Дан массив чисел: [1, 3, 5, 10, 20]. С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

let array3 = [1, 3, 5, 10, 20];

array3 = array3.join(' ');


console.log(array3);


// Задание 4. С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

let mainArr = [];
let arrElement = 1;

for (i = 1; i <= 3; i++) {
    let arr = [];
    for (y = 1; y <= 3; y++) {
        arr.push(arrElement);
    }
    mainArr.push(arr);
}


console.log(mainArr);


// Задание 5. Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

let array5 = [1, 1, 1];

array5 = array5.concat([2, 2, 2]);


console.log(array5);

/* Задание 6. Дан массив: [9, 8, 7, 'a', 6, 5]. С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива.
В результате работы программы вывести массив, состоящий из цифр. */


let array6 = [9, 8, 7, 'a', 6, 5];

array6.sort().pop();


console.log(array6);


/* Задание 7. Дан массив: [9, 8, 7, 6, 5]. Попросить пользователя угадать число(использовать prompt).Если значение, которое ввёл пользователь,
есть в массиве, вывести в alert «Угадал», в противном случае вывести «Не угадал». */

let array7 = [9, 8, 7, 6, 5];

number = prompt('Введите любое число');

if (number.trim() === '') {
    alert('Число не введено. Введите число');
} else if (array7.includes(Number(number)) === true) {
    alert('Угадал');
} else {
    alert('Не угадал');
}


// Задание 8. Дана строка: 'abcdef'. Необходимо, чтобы программа вывела в консоль 'fedcba'.

let str = 'abcdef';

let reverse = str.split('').reverse().join('')


console.log(reverse);


// Задание 9. Дан массив: [[1, 2, 3,], [4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

let array9 = [[1, 2, 3,], [4, 5, 6]];

let result = [].concat(...array9);


console.log(result);

/* Задание 10. Создайте массив с произвольными числами(диапазон от 1 до 10).Переберите его с помощью цикла for и в каждой итерации выведите в консоль сумму 
текущего и следующего элементов массива. Следующий элемент массива можно получить с помощью индекса: i + 1 .Обратите внимание, что у последнего элемента нет следующего. */

let array10 = [2, 6, 5, 7, 5, 3, 2, 1, 0, 9];

for (i = 0; i <= array10.length - 1; i++) {
    let sum = 0;
    if (i === array10.length - 1) {
        sum = array10[array10.length - 1];
        break;
    } else {
        sum = array10[i] + array10[i + 1];
    }


    console.log(sum);
}


/* Задание 11. Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел. Подсказка: для решения задачи используйте 
map(). */

const convertSquare = (array11) => {
    let result = array11.map(item => (item ** 2));
    return result;
}


/* Задание 12. Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов. Пример вызова:
getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5] */

const countLength = (array12) => {
    let result = array12.map(item => item.length);
    return result;
}


/* Задание 13. Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения. */

function filterPositive(array13) {
    let result = array13.filter(item => (item < 0));
    return result;
}

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);


/* Задание 14. Создайте массив, состоящий из 10 значений.Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будет два массива: 
исходный массив и массив с четными значениями. */

let firstArray = [];

for (i = 0; i < 10; i++) {
    firstArray.push(Math.round(Math.random() * 10));
}

let secondArray = firstArray.filter(item => (item % 2 === 0));

console.log(firstArray);
console.log(secondArray);


/* Задание 15. Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.
Для получения среднего арифметического необходимо все значения массива сложить и разделить на количество элементов в массиве */


let array15 = [];

for (i = 0; i < 6; i++) {
    array15.push(Math.ceil(Math.random() * 10));
}

let arifm = (array15.reduce((a, b) => a + b)) / array15.length;

console.log(arifm);
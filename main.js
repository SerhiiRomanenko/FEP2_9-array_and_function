//--------------------------------------------FIRST TASK------------------------------------------------------//


function createArray() {

    function isEmpty(str) {       // Функція перевірки чи пуста строка (одні пробіли)
        return str.trim() === "";
    }

    let arrayInString = prompt(`Введіть через пробіл елементи масиву (напр: 1 2 "hello" "javascript")`);    // вводимо елементи масиву
    if (arrayInString === null) {                                            // перевірка чи натиснув "Скасувати"
        alert("Шкода що Ви відмовилися =(")
    } else if (isEmpty(arrayInString)) {                                    // перевірка чи пусте значення
        alert("Ви ввели пусте значення =(");
    } else {
        let resArr = arrayInString.trim().split(" ");       // разбиваємо об'єкт String на масив строк
        console.log(resArr);
        console.log(`Кількість елементів в масиві = ${resArr.length}`)

        let arrOfStrings = resArr.filter((value) => +value !== + value).sort();   // вибираємо лише строки та сортуємо їх в новий масив

        let arrOfNumbers = resArr.filter(value => {                // вибираємо лише цифри та сортуємо їх в новий масив
            return typeof +value === "number" && +value === +value
        }).sort(function (a,b) {
            return a - b
        });
        let sortedArray = arrOfNumbers.concat(arrOfStrings);               // об'єднуємо відсортовані масиви зі строк та цифр в один масив
        console.log(sortedArray);

        sortedArray.splice(2,3);                                   //   видаляємо елементи з масиву з 2 ІНДЕКСУ(!) по 4 (включно)
        console.log(sortedArray);
        console.log(`Після видалення трьох елементів, кількість елементів в масиві стала = ${sortedArray.length}`)
    }
}
createArray();


//--------------------------------------------SECOND TASK------------------------------------------------------//

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//=================   Знайти суму та кількість позитивних елементів

let countOfPositiveElements = 0;
const sumOfPositiveElements = arr.reduce((sum, currentValue) => {
        if (currentValue > 0) {
            countOfPositiveElements++;
            return sum + currentValue;
        } else {
            return sum;
        }
    }, 0);

console.log(`Сума позитивних елементів = ${sumOfPositiveElements}`);
console.log(`Кількість позитивних елементів = ${countOfPositiveElements}`);

//==================   Знайти мінімальний елемент масиву та його порядковий номер

const minimalElement = arr.reduce((minElement, currentValue) => {
    return currentValue < minElement ? currentValue : minElement;
})

console.log(`Мінімальний елемент масиву = ${minimalElement}`);

const indexOfMinimalElement = arr.indexOf(minimalElement);
console.log(`Порядковий номер мінімального елементу масиву= ${indexOfMinimalElement}`);


//=================   Знайти максимальний елемент масиву та його порядковий номер.


const maximalElement = arr.reduce((maxEl, currentEl) => {
    if (currentEl > maxEl) {
        return currentEl;
    } else {
    return maxEl;
    }
})

let indexOfMaximalElement = arr.indexOf(maximalElement);

console.log(`Максимальний елемент масиву = ${maximalElement}`);
console.log(`Порядковий номер максимального елементу масиву = ${indexOfMaximalElement}`)


//=================   Визначити кількість негативних елементів.

const countOfNegativeElements = arr.reduce((accumulator, currentValue) => {
    if (currentValue < 0) {
        accumulator++;
    }
    return accumulator;
}, 0)

console.log(`Кількість негативних елементів = ${countOfNegativeElements}`);

//=================   Знайти кількість непарних позитивних елементів
//=================   Знайти суму непарних позитивних елементів


let CountOfOddPositiveElements = 0;
const SumOfOddPositiveElements = arr.reduce((sum, currentValue) => {
    if (currentValue > 0 && currentValue % 2 !== 0) {
        CountOfOddPositiveElements++;
        return sum + currentValue;
    }
    return sum;
}, 0)

console.log(`Кількість непарних позитивних елементів = ${CountOfOddPositiveElements}`);
console.log(`Сума непарних позитивних елементів = ${SumOfOddPositiveElements}`);


//=================   Визначити кількість парних позитивних елементів.
//=================   Знайти суму парних позитивних елементів.

let CountOfEvenPositiveElements = 0;
let sumOfEvenPositiveElements = arr.reduce((sum, currentValue) => {
    if (currentValue > 0 && currentValue % 2 === 0) {
        CountOfEvenPositiveElements++;
        return sum + currentValue;
    } else {
        return sum;
    }
}, 0)

    console.log(`Кількість парних позитивних елементів = ${CountOfEvenPositiveElements}`);
    console.log(`Cума парних позитивних елементів = ${sumOfEvenPositiveElements}`);



//================   Знайти добуток позитивних елементів.

let productOfPositiveElements = arr.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
        return accumulator * currentValue;
    } else {
        return accumulator;
    }
})
console.log(`Сума непарних позитивних елементів = ${SumOfOddPositiveElements}`);
console.log(`Добуток позитивних елементів = ${productOfPositiveElements}`);



//=================   Знайти найбільший серед елементів масиву, решту занулити (за допомогою reduce, fill та indexof)

let maxEl = arr.reduce((max, current) => {
   return current < max? max : current;
}, arr[0]);

console.log(`Найбільший серед елементів масиву = ${maxEl} з індексом ${arr.indexOf(maxEl)}`);

let newArr = new Array(arr.length).fill(0);
newArr[arr.indexOf(maxEl)] = maxEl;
console.log(newArr)


//=================   Або за допомогою функції та методів масивів (fill та indexof)
function getModifyArrayWithMaxEl(arr) {
    let maxEl = arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        if(maxEl < arr[i]) {
            maxEl = arr[i];
        }
    }

    let newArr = new Array(arr.length).fill(0);
    newArr[arr.indexOf(maxEl)] = maxEl
    return newArr;
}

console.log(getModifyArrayWithMaxEl(arr));
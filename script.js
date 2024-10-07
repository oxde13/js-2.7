//Задание 1: Найти сумму всех элементов массива

let numbers = [1, 2, 3, 4, 5];
function sumArray(arr) {
     let sum = 0;
    for (let number of arr) {
      sum += number;
    }
    return sum;
  };
  console.log(sumArray(numbers));

//Задание 2: Найти максимальный элемент массива

let numbers = [3, 1, 4, 1, 5, 9]; 
function findMax(arr) {
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
        arr[0]= arr[i];
    }   
}
return arr[0];
}
console.log(findMax(numbers)); 

//Задание 3: Фильтрация массива по условию

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filterArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] %2 == 0){
         result.push(arr[i]);
        }  
    }
    return result;
    }
console.log(filterArray(numbers)); // Пример вывода: [2, 4, 6, 8]

//Задание 4: Реализация метода массива "map" через цикл

let numbers = [1, 2, 3, 4, 5];

function multiplyByTwo(num) {
return num * 2;
}
function mapArray(arr, callback) {
let result =[];
for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr))  
}
return result;
}
console.log(mapArray(numbers, multiplyByTwo)); // Пример вывода: [2, 4, 6, 8, 10]

//Задание 5: Реализация метода массива "forEach" через цикл

let numbers = [1, 2, 3, 4, 5];

function printElement(element) {
console.log(element);
}

function forEachArray(arr, callback) {
    let result =[];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr))  
    }
    return result;
}
forEachArray(numbers, printElement); // Пример вывода: 1 2 3 4 5 (по одному числу на
строку)

//Задание 6: Развернуть массив

let numbers = [1, 2, 3, 4, 5];

function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let swap = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = swap;
        
      }
      return arr;
}
console.log(reverseArray(numbers)); // Пример вывода: [5, 4, 3, 2, 1]



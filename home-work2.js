//Как исправить "одни пятёрки"?

// var result = [];
// for (var i = 0; i < 5; i++) {
//     result[i] = function () {
//         console.log(i);
//     };
// }

//РЕШЕНИЕ 1:

var result = [];

for (var i = 0; i < 5; i++) {
	let counter = i;
	result.push(() => console.log(counter));
}

//тоже самое только записано по-другому
var result = [];

for (var i = 0; i < 5; i++) {
	let counter = i;
	result[i] = function () {
		console.log(counter);
	};
}

//РЕШЕНИЕ 2:
var result = [];

for (let i = 0; i < 5; i++) {
	result[i] = function () {
		console.log(i);
	};
}

// result[0](); //5
// result[1](); //5
// result[2](); //5
// result[3](); //5
// result[4](); //5


//////////////////////////////////////////////////

// function getGroup() {
//     let students = [];
//     let i = 0;
//     while (i < 10) {
//         students[i] = function() {
//             console.log(i);
//         }
//         i++
//     }

//     return students;
// }

// let group = getGroup();

// group[0](); // 10 как исправить на 0
// group[5](); // 10                  5

//РЕШЕНИЕ 1:

function getGroup() {
	let students = [];
	let i = 0;
	while (i < 10) {
		let counter = i;
		students[i] = function () {
			console.log(counter);
		}
		i++
	}

	return students;
}

let group = getGroup();

//РЕШЕНИЕ 2:

function getGroup() {
	let students = [];
	for (let i = 0; i < 10; i++) {
		students.push(() => console.log(i));
	}

	return students;
}

let group = getGroup();


//////////////////////////////////////////////////

// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.

//РЕШЕНИЕ(будет работать, если передается 1 аргумент, те не (2, 3))
function multiply(n = 1) {
	let anotherFunc = function (next = 1) {
		return multiply(n * next);
	};

	anotherFunc.toString = function () {
		return n;
	};

	return anotherFunc;
}
// const result1 = multiply(2)(3)(4)();
// console.log(result1); // Вывод: 24
// const result2 = multiply(2)(3)(4)(5();
// console.log(result2); // Вывод: 120

// const result1 = multiply(2)(3)(4)();
//
// // Пример использования:
// const result1 = multiply(2)(4)();
// console.log(result1); // Вывод: 24
//
// const result2 = multiply(5)(2)(3)(6)();
// console.log(result2); // Вывод: 30

/////////////////////////
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".

function getUniqArray(arr) {
	const checkType = (value) => (isFinite(value) && value !== null);
	if (!arr.every(checkType)) {
		throw new Error("В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел");
	}
	const uniqArray = Array.from(new Set(arr));
	return uniqArray;
}

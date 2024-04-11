//1.
// const a = {b: 1},
//     c = Object.create(a);
//
// console.log(c.b); // 1
// delete c.b; у с нет, такого свойства, а из родительского нельзя удалить
// console.log(c.b); // 1
// delete a.b; // удалилось из родителя, значит свойства b больше нет
// console.log(c.b); // undefined
// a.z = 2; // добавили свойство родителю
// console.log(c.z); // 2
// c.z = 3; // переопределили свойство для наследуемого объекта, оно не влияет на родительский
// console.log(a.z); // 2

// 2.

// const promise = new Promise(() => {
// })
// promise.prototype === Promise.__proto__ // false, promise.prototype не прототип
//
// const obj = {}
// obj.__proto__ === Object.prototype // true, тк obj.__proto__ наследует встроенный прототип объекта Object.prototype
//
// new Array([]).__proto__ === Array.prototype // true, тоже самое, что с obj
//
// function Fn1 () {}
// function Fn2 () {}
// Fn1.constructor === Fn2.constructor // true, по умолчанию конструкторы создаются с одинаковыми свойствами
//
// Fn1.prototype === Fn2.prototype // false, прототипы разные
//3.

// У вас есть два конструктора, Animal и Bird.
// Каждый объект типа Bird должен наследовать метод speak от Animal.
// Однако, Bird также должен иметь свой собственный метод fly.

// Создайте конструктор Animal, который принимает параметр name и устанавливает его как свойство объекта.
// Добавьте метод speak в Animal, который выводит в консоль звук, издаваемый животным (например, "Some generic sound").
// Создайте конструктор Bird, который принимает параметр name и вызывает конструктор Animal с тем же именем.
// Добавьте метод fly в Bird, который выводит в консоль сообщение о том, что птица летит (например, "Flying high!").
// Создайте объекты animal и bird с использованием соответствующих конструкторов и вызовите их методы speak и fly.
// Решите задачу, используя прототипное наследование, чтобы Bird наследовал от Animal.

// Должно быть такое поведение:
// const animal = new Animal("Дженни");
// const bird = new Bird("Воробей");
//
// animal.speak(); // "Some generic sound"
// bird.speak();   // "Some generic sound"
// bird.fly();     // "Flying high!"

// функции-кострукторы
function Animal (name) {
  this.name = name;
  this.speak = () => console.log("Some generic sound");
};

function Bird(name) {
    Animal.call(this, name); 
    this.fly = () => console.log("Flying high!");
};


// классы
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("Some generic sound");
  } 
};

class Bird extends Animal {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log("Flying high!");
  } 
};
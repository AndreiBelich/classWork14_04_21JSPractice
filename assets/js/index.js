"use strict";

/*1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4)*/
function calculateSequence(N){
  if(N < 1){
    throw new RangeError();
  }
  let result = 0;
  for(let i = 1; i <= N; i++){
    result += i
  }
  return result;
}

console.log(calculateSequence(4));
//console.log(calculateSequence(-2));

/*2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, который содержит свойства, о факультете и кафедре.
2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
2.4 Реализовать функцию выводит на экран всю информацию о студенте*/

class Student{
  constructor(name, surname, isMale, contacts){
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.contacts = contacts;
  }

  get name(){
    return this._name;
  }

  get surname(){
    return this._surname;
  }

  get isMale(){
    return this._isMale;
  }

  get contacts(){
    return this._contacts;
  }

  set name(newValue){
    this._validateType(newValue, "string");
    this._name = newValue;
  }

  set surname(newValue){
    this._validateType(newValue, "string");
    this._surname = newValue;
  }

  set isMale(newValue){
    this._validateType(newValue, "boolean");
    this._isMale = newValue;
  }

  set contacts(newValue){
    this._validateType(newValue, "string");
    this._contacts = newValue;
  }

  _validateType(value, type){
    if(typeof(value) !== type){
      throw new TypeError();
    }
  }

  addInfoAboutFaculty(info){
    if(!(info instanceof Faculty)){
      throw new TypeError();
    }
    this.info = info;
  }

  showInformation(){
    console.log(`Info about student: Name:${this.name}, surname: ${this.surname},`+
    ` gender:${this.isMale ? "man" : "woman"}, contacts: ${this.contacts} ${this.info ? this.info : "data about info not specified!"}`);
  }
}

class Faculty{
  constructor(aboutFaculty, department){
    this.faculty = aboutFaculty;
    this.department = department;
  }

  get faculty(){
    return this._faculty;
  }

  get department(){
    return this._department;
  }

  set faculty(newValue){
    this._validateType(newValue, "string");
    this._faculty = newValue;
  }

  set department(newValue){
    this._validateType(newValue, "string");
    this._department = newValue;
  }

  _validateType(value, type){
    if(typeof(value) !== type){
      throw new TypeError();
    }
  }
}

const student1 = new Student("Ivan", "Ivanov", true, "city ZP");
const student2 = new Student("Polina", "Leonova", false, "city ZP");
const faculty = new Faculty("Математкика", "Прикладная математика");
student1.showInformation();
student2.showInformation();
console.log("Add info:");
student1.addInfoAboutFaculty(faculty);
student2.addInfoAboutFaculty(faculty);
student1.showInformation();
student2.showInformation();

/*3.1 Создать числовой массив и проинициализировать его из 25 элементов.
3.1*Инициализация с помощью случайных чисел
3.2 Вывести элементы с четными индексами
3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
3.4 Вывести индексы нулевых элементов (элемент равен нулю)
3.5 Подсчитать количество нулевых элементов*/

/**
 * 
 * @param {number} size 
 * @param {number} min 
 * @param {number} max 
 * @returns array
 */
function generateRandomArray(size, min, max){
  const array = [];
  for(let i = 0; i < size; i++){
    const item = Math.floor( Math.random() * (max - min + 1) + min);
    array.push(item);
  } 
  return array;
}

const ARRAY_SIZE = 25;
const MIN_VALUE = 0;
const MAX_VALUE = 50;
const arr = generateRandomArray(ARRAY_SIZE, MIN_VALUE, MAX_VALUE);
console.log(arr);
console.log("Вывести элементы с четными индексами");
arr.forEach((item, index) => {
  if(index % 2 === 0){
    console.log(item);
  }
});
console.log("Вывести только четные элементы (четные числа делятся на 2 без остатка)");
arr.forEach((item) => {
  if(item % 2 === 0){
    console.log(item);
  }
});

console.log("Вывести индексы нулевых элементов (элемент равен нулю)");
arr.forEach((item, index) => {
  if(item === 0){
    console.log(index);
  }
});

console.log("Подсчитать количество нулевых элементов");

const numberCounter = (findNumber, arr) => arr.reduce((acc, nextValue) => {
  nextValue === findNumber ? acc++ : acc;
  return acc;
}, 0);
const zeroCounter = numberCounter(0, arr);
console.log(zeroCounter);
/*const test = [1, 1, 1, 1, 1, 1, 23, 4, ,5 , 1, 22, 2, 2];
console.log(numberCounter(1, test));*/

/*4 Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
4.1 Для каждого поля создать get и set с проверкой типов.*/
class Book{
  constructor(autor, title, publishingYear, publishing){
    this.autor = autor;
    this.title = title;
    this.publishingYear = publishingYear;
    this.publishing = publishing;
  }

  get autor(){
    return this._autor;
  }

  get title(){
    return this._title;
  }

  get publishingYear(){
    return this._publishingYear;
  }

  get publishing(){
    return this._publishing;
  }

  set autor(newValue){
    this._validateType(newValue, "string");
    if(!newValue.length){
      throw new RangeError();
    }
    this._autor = newValue;
  }

  set title(newValue){
    this._validateType(newValue, "string");
    if(!newValue.length){
      throw new RangeError();
    }
    this._title = newValue;
  }

  set publishingYear(newValue){
    this._validateType(newValue, "number");
    const currentYear = new Date().getFullYear();
    if(newValue > currentYear){
      throw new RangeError();
    }
    this._publishingYear = newValue;
  }

  set publishing(newValue){
    this._validateType(newValue, "string");
    if(!newValue.length){
      throw new RangeError();
    }
    this._publishing = newValue;
  }

  _validateType(value, type){
    if(typeof(value) !== type){
      throw new TypeError();
    }
  }
}

class ElectronicBook extends Book{
  constructor(autor, title, publishingYear, publishing, format, isbn){
    super(autor, title, publishingYear, publishing);
    this.format = format;
    this.isbn = isbn;
  }

  get format(){
    return this._format;
  }

  get isbn(){
    return this._isbn;
  }

  set format(newValue){
    this._validateType(newValue, "string");
    this._format = newValue;
  }

  set isbn(newValue){
    this._validateType(newValue, "number");
    this._isbn = newValue;
  }
}

console.log("Info about books");
const book = new Book("Tolstoy", "War and Peace", 1869, "Writers Partners");
console.log(book);
const eBook = new ElectronicBook("Tolstoy", "War and Peace", 2015, "Internet Pirates", "PDF", 2345678321);
console.log(eBook);

/*5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;*/

function print(n){
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");
    } else if(i % 3 === 0){
      console.log("fizz");
    }else if(i % 5 === 0){
      console.log("buzz");
    }else{
      console.log(i);
    }
  }
}

console.log("Test function print");
print(30);

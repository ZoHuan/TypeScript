// 声明一个变量a，同时指定它的类型为number
let a: number;

// a的类型设置为number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = "hello"; // 此行代码会报错

let b: string;
b = "hello";
// b = 123;

// 声明完变量直接进行赋值
// let c: boolean = false;

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = false;
c = true;

// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b) {
//   return a + b;
// }

// sum(123, 456);

function sum(a: number, b: number): number {
  return a + b;
}

let result = sum(123, 456);

class Animal {
  name: string;
  age: number;

  // constructor 构造函数
  // 构造函数会在对象创建时调用
  constructor(name: string, age: number) {
    // 在实例方法中，this就表示当前的实例
    // 在构造函数中当前对象就是当前新建的那个对象
    // 可以通过this向新建的对象中添加属性
    this.name = name;
    this.age = age;
  }

  bark() {
    // alert("嗷");
    // 在方法中可以通过this来表示当前调用方法的对象
    console.log(this);
  }
}

const animal = new Animal("狗", 3);
const animal1 = new Animal("猫", 3);

console.log(animal);
animal.bark();

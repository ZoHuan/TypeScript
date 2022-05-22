(function () {
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    brak() {
      console.log("嗷");
    }
  }

  class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
      super(name); // 调用父类的构造函数
      // 如果在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数进行调用
      this.age = age;
    }
    brak() {
      // 在类的方法中super就表示当前类的父类
      //   super.brak();
      console.log("汪汪汪");
    }
  }

  const dog = new Dog("狗", 5);
})();

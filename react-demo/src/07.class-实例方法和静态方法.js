function Person(name, age) {
  this.name = name
  this.age = age
}


const p1 = new Person('拼夕夕', 2)
console.log(p1);

Person.prototype.say = function () {
  console.log("这是Person的实例方法");
}

Person.sleep = function () {
  console.log("这是Person对象的静态方法");
}

p1.say() // Person 的实例方法
// p1.sleep()
Person.sleep() // 静态方法调用

// ==================分割线============================
console.log('=======================================');
// 创建一个动物类
// 注意1：在class的 {} 区域内部，只能写 构造器，静态属性，静态方法，实例方法
// 注意2：class关键字内部，还是遵循原来的规则方式，将这种 封装方式称之为 语法糖
class Animal{
  // var a = "this is a 'a'"
  constructor(name, age){
    // 实例属性
    this.name = name;
    this.age = age;
    
  }

  // 在 class 内部 通过 static 修饰的属性 就是静态属性
  static baseInfo = 'baseInfo ， 用的不多'


  eat(){
    console.log("这是动物类的实例方法");
  }

  // Animal的静态方法
  static sleep(){
    console.log("这是Animal的静态方法，用的不多");
  }

}



const a1 = new Animal('旺财', 1)
console.log(a1);
a1.eat() // Animal的实例方法
// a1.sleep()
Animal.sleep() // 调用Animal的静态方法














function Person(name, age) {
  this.name = name
  this.age = age
}


const p1 = new Person('拼夕夕', 2)
console.log(p1);


// ==================分割线============================
console.log('=======================================');
// 创建一个动物类
class Animal{
  constructor(name, age){
    // 实例属性
    this.name = name;
    this.age = age;
    
  }

  // 在 class 内部 通过 static 修饰的属性 就是静态属性
  static baseInfo = 'baseInfo'

}
// 静态属性：通过构造函数直接访问到的属性
// 实例属性：通过new 出来的实例 访问到的属性

// info 属性：直接挂载到构造函数上 因此它是 静态属性
Person.info = "info"


const a1 = new Animal('旺财', 1)
console.log(a1);
document.write(JSON.stringify(a1))
console.log(a1.name);
console.log(a1.age);
console.log(Person.info); // 实例属性
document.write(Person.info)
document.write(Animal.baseInfo) // Animal的静态属性














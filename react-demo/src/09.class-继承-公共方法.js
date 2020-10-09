class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  introduce(){
    console.log("I am "+this.name);
  }
}


class Amiracan extends Person{
  constructor(name, age){
    // 若继承Person类，显示写出constructor就需要优先调用super() 方法
    // 若不传入参数 父类则接收不到，默认为 undefined
    // 子类中的super就是父类constructor的一个引用
    // super必须置于首行
    super(name)
  }
}

const a1 = new Amiracan('John', 18)
console.log(a1);
a1.introduce()

class Chinese extends Person{
  constructor(name, age, id) {
    super(name, age)
    this.id = id  // 私有属性
  }
}

const c1 = new Chinese("张三", 20, '12342434****')
console.log(c1);
c1.introduce()

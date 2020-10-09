class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }

}


class Amiracan extends Person{
  introduce(){
    console.log("I am amiracan");
  }
}

const a1 = new Amiracan('John', 18)
console.log(a1);
a1.introduce()


class Chinese extends Person{
  introduce(){
    console.log("I am chinese");
  }
}

const c1 = new Chinese("张三", 20)
console.log(c1);
c1.introduce()

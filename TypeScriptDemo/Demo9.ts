class Person {
    private name: string;
    sayHello() {
      console.log(this.name + 'comming!')
    }
    constructor(info: any) {
      this.name = info.name
    }
}
// 如果不在类里对name的访问属性进行定义，那么它就会默认是public访问属性
// class Person {
//     public name:string;
// }
const person = new Person({
  name: '晓楠',
  // name: 1
});
// person.name = 'jspang.com'; // 私有化不得修改只允许内部访问
person.sayHello()
// console.log(person)
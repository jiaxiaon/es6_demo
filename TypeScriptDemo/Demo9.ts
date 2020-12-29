class Person {
    name: string;
}
// 如果不在类里对name的访问属性进行定义，那么它就会默认是public访问属性
// class Person {
//     public name:string;
// }
const person = new Person();
person.name = 'jspang.com';

console.log(person)
const xiaoJieJie: {
    name: string,
    age: number
} = {
    name: '大脚',
    age: 2
}
const xiaoJieJies: String[] = ["谢大脚","刘英","小红"]
console.log(xiaoJieJies)

class Person {
    // constructor(data) {
    //     this.name = data.name;
    //     this.age = data.age;
    // }
    // toString() {
    //     return `${this.name}今年${this.age}岁了`
    // }
}
const dajiao: Person = new Person();
const jianXiaoJieJie: () => string = () => {
    return "大脚"
}

/* 
    ts对象类型的几种形式:
    1.对象类型
    2.数组类型
    3.类类型
    4.函数类型
*/
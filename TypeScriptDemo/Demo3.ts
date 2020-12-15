/*
    类型注解
    表明这个变量是什么类型
*/
let countNum: number;
countNum = 123;
console.log(countNum)
/*
    类型推断
    自动推断变量是什么类型
*/
let countInference = 123;

function getTotal(one: number, two: number) { // ts自动类型推断
    return one + two;
}
const total = getTotal(1,2)
const total1 = getTotal1(1,2)
function getTotal1(one: number, two: number): number { // 类型注解
    return one + two;
}

/* 
    函数无返回值时定义方法 
    使用void，代表没有返回任何值
*/
function sayHello(): void {
    console.log('hello world');
}
/*
    当一个函数永远也执行不完，使用never
    当函数死循环也是用never
*/
function errorFuntion(): never {
    throw new Error();
    console.log("Hello World");
}
function forNever(): never {
    while (true) {}
    console.log("Hello JSPang");
}
/*
    函数参数为对象（解构）
*/
// function add(
//     {one, two}
// ) {
//     return one + two
// } // 这个时候add是any
function add({ one, two }: { one: number, two: number }): number {
    return one + two;
} // 如果需要指定返回类型，格式是这个
const total_ = add({one: 1, two: 2})
console.log(total_)

const testArr: (number | string | object)[] = ['aaaa',2222,[111]]   //   如果需要匹配多种类型，加个 () 然后里边加上 | 即可

/* 类型别名 */
type lady = {
    name: string,
    age: number
}
const xiaoJieJieType: lady[] = [
    {
        name: '某人',
        age: 10
    }
]
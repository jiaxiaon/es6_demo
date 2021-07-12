/*
 * @Author: jasper
 * @Date: 2021-07-12 11:03:18
 * @LastEditors: jasper
 * @LastEditTime: 2021-07-12 14:14:18
 * @Description: 泛型 可以动态的填入参数以及返回值的类型值
 */

function echo<T>(arg: T): T {
  return arg;
}

const result = echo("123");

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result2 = swap([true, "str"]);

// 约束泛型
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const arr = echoWithArr([1, 2, 3]);

interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str = echoWithLength("str");
const obj = echoWithLength({ length: 10 });
const arr2 = echoWithLength([1, 2, 3]);

class Queque<T> {
  private data: any[] = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queque = new Queque<number>();
queque.push(1);
console.log(queque.pop().toFixed());

const queque2 = new Queque<string>();
queque2.push("str");
console.log(queque2.pop().length);

interface keyPair<T, U> {
  key: T;
  value: U;
}

let ky1: keyPair<string, number> = {
  key: "123",
  value: 222,
};
let ky2: keyPair<boolean, string[]> = {
  key: false,
  value: ["123"],
};

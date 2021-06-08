/** 枚举 enum */
enum Color {Red = 1, Green = 4, Blue = 8}
let c: Color = Color.Green;
// console.log(c)

/** 类型断言 <>  /  as */
let someValue: any = 'this is a string'
// let strLength: number = (<string>someValue).length
let strLength: number = (someValue as string).length

/** 只读属性 readonly */
interface Point {
  readonly a: number,
  b: string
}

let p1: Point = { a: 10, b: '1'}
// p1.a = 20 // 由于a是只读，所以会报错
/** 只读属性拓展 ReadonlyArray */
let arr: number[] = [1, 2, 3]
let ro: ReadonlyArray<number> = arr
console.log(ro)

/** */

interface Public {
    name: string;
    age: number;
    bust: number;
    waistline?: number; // 是否传入，传入则为number
    [propname: string]: any; // 属性名可以是字符串类型，值可以为任意值
    say?(): string
}
const testGirl: Public = {
    name: "大脚",
    age: 18,
    bust: 94,
    waistline: 21,
    sex: "女",
    say() {
        return '欢迎光临，红浪漫洗浴！！'
    }
};
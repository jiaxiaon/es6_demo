interface Girl {
    name: string;
    age?: number;
    bust: number;
    waistline?: number;
    [propname: string]: any;
    say?(): string;
}
class XiaoJieJie implements Girl {
    name = "刘英";
    age = 18;
    bust = 90;
    waistline = 12;
    say() {
        return "欢迎光临 ，红浪漫洗浴！！";
    }
}
interface Teacher extends Girl { // 可以继承girl的属性
    teach(): number;
}
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
const getResume1 = (girl: Teacher) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
  girl.sex && console.log(girl.name + "性别是：" + girl.sex);
};
const obj = {
  name: "大脚",
  age: 18,
  bust: 94,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  },
  teach() {
    return 1 + 10
  }
}
getResume1(obj)
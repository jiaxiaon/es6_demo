/* interface */
interface Public {
    name: string,
    age: number,
    bust: number,
    waistline?: number; // 是否传入，传入则为number
}
const screenResume = (girl: Public) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
    girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
};

const getResume = (girl: Public) => {
    console.log(girl.name + "年龄是：" + girl.age);
    console.log(girl.name + "胸围是：" + girl.bust);
};
const girl = {
    name: "大脚",
    age: 18,
    bust: 94,
};

screenResume(girl);
getResume(girl);
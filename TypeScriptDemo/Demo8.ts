/*
 * @Author: jasper
 * @Date: 2021-01-23 17:38:13
 * @LastEditors: jasper
 * @LastEditTime: 2021-07-12 10:20:02
 * @Description:
 */
class Lady {
  content = "啦啦啦啦";
  sayLaLaLa(): string {
    return this.content;
  }
}
const goddess = new Lady();
console.log(goddess.sayLaLaLa());

class XiaoJieJie1 extends Lady {
  sayLove() {
    return "I love you";
  }
  sayLaLaLa() {
    return super.sayLaLaLa() + "。你好！";
  }
}
const goddess1 = new XiaoJieJie1();
console.log(goddess1.sayLaLaLa());
console.log(goddess1.sayLove());

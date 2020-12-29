class Lady {
    content = '啦啦啦啦';
    sayLaLaLa() {
        return this.content;
    }
}
const goddess = new Lady();
console.log(goddess.sayLaLaLa())

class XiaoJieJie extends Lady {
    sayLove() {
      return "I love you";
    }
}
const goddess1 = new XiaoJieJie();
console.log(goddess1.sayLaLaLa());
console.log(goddess1.sayLove());
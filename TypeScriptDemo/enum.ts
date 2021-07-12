/*
 * @Author: jasper
 * @Date: 2021-07-12 10:49:28
 * @LastEditors: jasper
 * @LastEditTime: 2021-07-12 11:01:55
 * @Description: enum study
 */

enum direction {
  up,
  down,
  left,
  right,
}

console.log(direction.up);
console.log(direction[0]);

const enum desction { // 常量枚举   通过tsc创建js文件看效果
  title = "描述标题",
  content = "描述内容",
  end = "结束",
}

const title = "描述标题";
if (title === desction.title) {
  console.log("输出描述标题");
}

/*
 * @Author: jasper
 * @Date: 2021-07-12 14:42:15
 * @LastEditors: jasper
 * @LastEditTime: 2021-07-12 15:01:43
 * @Description:
 */

type PlusType = (x: number, y: number) => number;
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: PlusType = sum;

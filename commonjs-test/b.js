const { add, mul } = require('./a')
// const opts = require('./a')
// opts.add      opts.mul
const sum = add(10,20)
const result = mul(10,20)

console.log(sum)
console.log(result)



const _ = require('lodash')
const arr = _.concat([1, 2], 3);
console.log(arr)
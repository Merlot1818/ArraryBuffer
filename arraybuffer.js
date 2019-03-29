/**
 * ArrayBuffer 构造函数  方法 属性
 */
const buffer = new ArrayBuffer(8);

console.log(buffer.byteLength);// 8个字节
console.log(ArrayBuffer.isView(buffer));// false

const a = new Int8Array(buffer);// 视图
console.log(ArrayBuffer.isView(a));// true

console.log(ArrayBuffer.length);

/**
 * Int8Array 视图读写
 */
const buffer2 = new ArrayBuffer(8);
const a2 = new Int8Array(buffer2, 0, 4);
const b2 = new Int8Array(buffer2, 4, 1);

a2[0] = 1;
a2[2] = 10;
b2[0] = 20;
console.log(a2, b2);


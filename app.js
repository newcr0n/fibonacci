'use strict';
const memo=new Map(); //memoという名前のMapを作成
memo.set(0,0);//０，１番目の答えは予め定義されているため、
memo.set(1,1);//これらを格納
function fib(n) {
    if(memo.has(n)) {
        return memo.get(n);
    } 

    const value=fib(n-1)+fib(n-2);
    memo.set(n,value);
    return value;
}
// 上記コードでMapがnをキーとした答えを持っていればその値をそのまま関数の値として返す。
//そうでない場合は再帰関数を計算して値を求め、それをMapに格納したあと、返すという実装。
const length=40;
for(let i=0;i<=length;i++){
    console.log(fib(i));
}
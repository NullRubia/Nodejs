const counter = require("./counter.js"); //counter.js를 불러옴

counter.increase(); //count를 1증가
counter.increase(); //한번 더 증가

console.log(counter.getCount());

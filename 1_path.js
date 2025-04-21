const path = require("path");

console.log(__dirname); //현재 디렉토리
console.log(__filename); //현재 파일

console.log(path.sep); //디렉토리를 나누는 특수문자
console.log(path.delimiter); //코드 작성시 마지막에 써야하는 문자

console.log(path.basename(__filename)); //파일 이름만 추출
console.log(path.basename(__filename), ".js"); //확장자 제외하고 추출
console.log(path.dirname(__filename)); //디렉토리만 추출
console.log(path.extname(__filename)); //확장명만 추출

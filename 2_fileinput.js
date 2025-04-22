const fs = require("fs");
//동기 방식
// 별도로 예외처리를 해줘야 함
//const data = fs.readFileSync("example.txt", "utf8");
//console.log("파일내용: ", data);

//비동기 방식
//별도로 에러처리를 할 필요가 없음
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log("파일 읽기 실패: ", err);
    return;
  }
  console.log("파일내용: ", data);
});
console.log("프로그램을 종료합니다."); //비동기 방식이기 떄문에 파일을 읽는동안 해당 명령어가 먼저 수행됨

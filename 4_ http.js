const http = require("http");
/*
const sever = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); //사용자에게 전달해줄 헤더 정보(데이터 타입 = 텍스트)
  //200번대 정상 호출, {}안에는 전달할 정보
  res.end("Hello. world\n"); //전달될 내용
});

//127.0.0.1:3000, localhost:3000
sever.listen(3000, () => {
  console.log("서버 실행 중");
});
*/

const sever = http.createServer((req, res) => {
  const url = req.url; //사용자가요청한 정보중 사용자가 입력한 url
  //127.0.0.1:3000/
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home");
  } else if (url === "/about") {
    //127.0.0.1:3000/about
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("mypage");
  } else {
    //127.0.0.1:3000/@
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("not found");
  }
});

sever.listen(3000, () => {
  console.log("서버 실행 중");
});

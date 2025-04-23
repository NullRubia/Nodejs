const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); //post 요청용
//http://127.0.0.1:3000/test.html
//app.use(express.static("public")); //실제 폴더 이름
//http://127.0.0.1:3000/static/test.html
app.use("/static", express.static("public")); // /static: URL접근, public: 실제 폴더 이름

app.set("view engine", "ejs");
// views: C:\AI\Nodejs\views
app.set("views", path.join(__dirname, "views"));

//http://127.0.0.1:3000/
app.get("/", (req, res) => {
  res.send("<h2>홈페이지입니다. 다양한 기능을 테스트 해 보세요.</h2>");
});

//http://127.0.0.1:3000/user/10
app.get("/user/:id", (req, res) => {
  res.send(`요청한 사용자 ID는 ${req.params.id}입니다.`);
});

//http://localhost:3000/search?keyword=hello&number=12345
app.get("/search", (req, res) => {
  const { keyword, number } = req.query;
  res.send(`검색어 : ${keyword}, 숫자: ${number}`);
});

app.post("/submint", (req, res) => {
  const { name, age } = req.body;
  res.send(`이름: ${name}, 나이: ${age}`);
});

app.get("/hello", (req, res) => {
  res.render("hello", { name: "김사과" });
});

app.get("/posts", (req, res) => {
  const posts = [
    { title: "첫 번째 글", content: "내용입니다" },
    { title: "두 번째 글", content: "Express는 정말 편리하네요" },
  ];
  res.render("posts", { posts });
});

app.listen(3000, () => {
  console.log("서버 실행중!");
});

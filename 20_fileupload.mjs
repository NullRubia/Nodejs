import express from "express";
import multer from "multer";
import fs from "fs";

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/";
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ── 단일 파일 업로드 엔드포인트 ──
// POST /upload-single
//"file"은 html 상의 input의 name속성값과 동일해야함
app.post("/upload-single", upload.single("file"), (req, res) => {
  // req.file 에 업로드된 파일 정보가 담겨 있습니다.
  console.log(req.file);
  res.json({
    message: "단일 파일 업로드 성공",
    file: req.file,
  });
});

// ── 여러 파일 업로드 엔드포인트 ──
// POST /upload-multiple
app.post("/upload-multiple", upload.array("files", 5), (req, res) => {
  // req.files 에 업로드된 파일 배열이 담겨 있습니다.
  console.log(req.files);
  res.json({
    message: "다중 파일 업로드 성공",
    files: req.files,
  });
});

app.listen(port, () => {
  console.log(`실행 중`);
});

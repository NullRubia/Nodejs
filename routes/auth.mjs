const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /singup:
 *   post:
 *     summary: 회원가입
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원가입 성공
 *
 * /login:
 *   post:
 *     summary: 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: 로그인 성공
 *
 * /user:
 *   put:
 *     summary: 회원정보 수정
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원정보 수정 성공
 *   delete:
 *     summary: 회원정보 삭제
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원정보 삭제 완료
 */
router.post("/singup", (req, res) => {
  res.send("입력한 정보로 회원가입 되었습니다.");
});

router.post("/login", (req, res) => {
  res.send("입력한 정보로 로그인 되었습니다.");
});
router.put("/user", (req, res) => {
  res.send("회원정보가 수정 되었습니다.");
});
router.delete("/user", (req, res) => {
  res.send("회원정보가 삭제 되었습니다.");
});
module.exports = router;

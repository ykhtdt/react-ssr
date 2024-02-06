import express from "express";
import { generateHTML } from "./src/ssr.js";

const app = express();

// Express에서 JSON 형태의 요청의 body를 파싱하기 위해 사용하는 미들웨어
app.use(express.json());

// 브라우저에서 사용할 수 있게 정적파일로 등록
app.use("/src", express.static("./src"));

app.get("/", (req, res) => {
  return res.send(generateHTML());
});

app.get("/api/content", (req, res) => {
  const content = "서버에서 보내주는 텍스트";
  return res.json({
    data: content,
  });
});

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});

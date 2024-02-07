import express from "express";

import { generateHTML } from "./src/ssr.js";
import { model } from "./src/model.js";

const app = express();

// Express에서 JSON 형태의 요청의 body를 파싱하기 위해 사용하는 미들웨어
app.use(express.json());

// 브라우저에서 사용할 수 있게 정적파일로 등록
app.use("/src", express.static("./src"));

app.get("/", (req, res) => {
  res.send(generateHTML(model));
});

app.post("/api/items", (req, res) => {
  const item = req.body.item;
  model.addItem(item);

  res.status(201).send();
});

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});

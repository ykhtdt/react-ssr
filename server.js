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

app.get("/api/get-items", (req, res) => {
  res.send(model.items);
});

app.put("/api/items", (req, res) => {
  model.addItem(req.body.item)
  model.init({ items: model.items });
  console.log(model.items);

  res.status(200).send(model.items);
});

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});

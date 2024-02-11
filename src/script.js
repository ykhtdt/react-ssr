import { Page } from './page.js';
import { model } from './model.js';

async function updateServerItem(items) {
  await fetch("/api/items", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: items,
    })
  });
}

function render() {
  const root = document.getElementById("root");

  root.innerHTML = Page(model.items);

  root.querySelector("#add").onclick = async () => {
    model.addItem("랜덤 아이템");
    updateServerItem(model.items).then(() => render());
  }
}

function main() {
  model.init(window.__INITIAL_DATA__);

  render();
}

main();

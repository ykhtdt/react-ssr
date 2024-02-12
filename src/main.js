import { Page } from "./page.js";
import { model } from "./model.js";

async function initServerItems(items) {
  await fetch("/api/init-items", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: items,
    }),
  });
}

async function getServerItems() {
  const res = await fetch("/api/get-items", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const nextItems = await res.json();

  return nextItems;
}

async function addServerItems(items) {
  const res = await fetch("/api/put-items", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: items,
    }),
  });

  const nextItems = await res.json();

  return nextItems;
}

async function render() {
  const root = document.getElementById("root");

  root.innerHTML = Page(await getServerItems());

  root.querySelector("#add").onclick = async () => {
    await addServerItems("랜덤 아이템");
    render();
  };
}

function main() {
  initServerItems(window.__INITIAL_DATA__.items).then(() => render());
}

main();

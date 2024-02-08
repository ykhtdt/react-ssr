import { render } from './main.js';
import { model } from './model.js';

export async function getItems() {
  const res = await fetch("/api/get-items", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const nextItems = await res.json();

  return nextItems;
}

export async function addItem(item) {
  await fetch("/api/items", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item: item,
    })
  });

  // model.init({ items: nextItems });
}

//addItem("추가한 아이템")
{/* <script>window.__INITIAL_DATA__=${JSON.stringify({ items: model.items })}</script> */}

export function pageEvent(element) {
  element.querySelector("#add").onclick = async () => {
    
    addItem("추가한 아이템").then(() => render());
  };
}

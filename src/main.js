import { Page } from './page.js';
import { model } from './model.js';
import { pageEvent, getItems } from './page-event.js';

// async function updateItems(items) {
//   const res = await fetch("/api/items", {
//     method: "put",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       items: items,
//     })
//   });

//   return await res.json();
// }

// async function updateServerItem() {
//   const updatedItems = await updateItems(model.items);
  
//   model.init({ items: updatedItems });
// }

export async function render() {
  const root = document.getElementById("root");

  const items = await getItems();
  console.log(items);
  
  // root.innerHTML = Page(model.items);
  root.innerHTML = Page(items);
  pageEvent(root);

  // root.querySelector("#add").onclick = async () => {
  //   model.addItem("랜덤 아이템");
  //   updateServerItem().then(() => render());
  // }
}

function main() {
  // model.init(window.__INITIAL_DATA__);

  render();
}

main();

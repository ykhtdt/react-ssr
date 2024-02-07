import { Page } from './page.js';
import { model } from './model.js';

function render() {
  const root = document.getElementById("root");

  root.innerHTML = Page(model.items);

  root.querySelector("#add").onclick = () => {
    model.addItem("랜덤 아이템");
    render();
  }

  // root.querySelector("#add").onclick = async () => {
  //   await fetch("/api/items", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       item: "랜덤 아이템",
  //     })
  //   });
  // }
}

function main() {
  render();
}

main();

// 자바스크립트 코드가 해당 아이디 존재 이전에 실행되는 경우 오류 발생
document.getElementById("change").onclick = () => {
  const button = document.getElementById("title");
  if (button.style.color === "red") {
    button.style.color = "black";
  } else {
    button.style.color = "red";
  }
}

document.getElementById("add").onclick = async () => {
  await fetch("/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item: "랜덤 아이템",
    })
  }).then(() => window.location.reload());
}
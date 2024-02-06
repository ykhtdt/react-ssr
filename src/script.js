// 자바스크립트 코드가 해당 아이디 존재 이전에 실행되는 경우 오류 발생
document.getElementById("change").onclick = () => {
  const button = document.getElementById("title");
  if (button.style.color === "red") {
    button.style.color = "black";
  } else {
    button.style.color = "red";
  }
}

document.getElementById("write").onclick = async () => {
  const paragraph = document.getElementById("paragraph");

  const paragraphText = await fetch("/api/content", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (response) => await response.json().then((data) => data));

  paragraph.append(paragraphText.data);
}
// 코드 구현

document.querySelector(".dark-check").addEventListener("click", () => {
  const html = document.documentElement;

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("darkTheme", "false");
  } else {
    html.classList.add("dark");
    localStorage.setItem("darkTheme", "true");
  }
  const modetext = document.getElementsByClassName("mode-text")[0];
  modetext.innerText =
    document.documentElement.classList.length == 1 ? "다크모드" : "라이트모드";
  console.log(document.documentElement.classList.length);
});

const storedTheme = localStorage.getItem("darkTheme");
let modetext = document.getElementsByClassName("mode-text")[0];
modetext.innerText =
  document.documentElement.classList.length == 1 ? "다크모드" : "라이트모드";
if (storedTheme !== null) {
  if (storedTheme === "true") {
    document.documentElement.classList.add("dark");
  }
  console.log("test");
}

modetext.innerText =
  document.documentElement.classList.length == 1 ? "다크모드" : "라이트모드";
console.log(document.documentElement.classList.length);

const darkcheck = document.getElementsByClassName("dark-mode")[0];
document.documentElement.classList.length == 1
  ? (darkcheck.checked = true)
  : (darkcheck.checked = false);

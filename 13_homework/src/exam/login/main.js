// 코드 구현
const password = document.getElementById("password");
const warningtext = document.querySelector(".warningText");
const loginbtn = document.querySelector(".loginBtn");
const id = document.getElementById("id");

const passwordType = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
loginbtn.disabled = "true";
password.oninput = () => {
  if (passwordType.test(password.value)) {
    warningtext.style.display = "none";
    loginbtn.disabled = "";
    loginbtn.style.cssText =
      "background-color: yellowgreen; border : 0px; border-radius : 5px; cursor : pointer;";
  } else warningtext.style.display = "block";
};

loginbtn.onclick = () => {
  loginbtn.style.border = "2px solid blue";
  setTimeout(() => {
    alert(`${id.value}님 어서오세요`);
  }, 0);
};

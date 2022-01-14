//index.js
const { getCircleArea, getSquareArea, PI } = require("./mathUtil");
const { logFigureError, logInput, logResult } = require("./log");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("원하는 도형을 작성해주세요 : (정사각형, 원) ", (figure) => {
  console.log(`선택한 도형 : ${figure}`);

  switch (figure) {
    case "정사각형":
      rl.question("변의 길이를 입력해주세요 : ", (input) => {
        console.log(logInput(input));
        console.log(logResult(input, getSquareArea(input)));
      });
      break;
    case "원":
      rl.question("반지름의 길이를 입력해주세요 : ", (input) => {
        console.log(logInput(input));
        console.log(logResult(input, getCircleArea(input)));
      });
      break;
    default:
      console.log(logFigureError);
      break;
  }
});

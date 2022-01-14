const path = require("path");
console.log(__dirname);   //C:\Users\정민규\Desktop\git\front_end_study\10_Webpack\Circle

const pathTest = path.resolve(__dirname, "abc");   // 슬래시가 끼여들면서 절대경로를 생성
console.log(pathTest);  //C:\Users\정민규\Desktop\git\front_end_study\10_Webpack\Circle\abc

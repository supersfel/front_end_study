interface Props {
  [key: string]: string;
  // [key : boolean] : string ; //error 인덱스타입은 number나 string만

  name: string;
}

const p: Props = {
  name: "mingyu", //필수
  a: "d",
  b: "e",
  //c : 3  //error
  1: "b", //error가 나지 않음! p[1]로 조회가능
};

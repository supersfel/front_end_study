class A{

}

console.log(new A());

const B = class{};

console.log(new B());
//console.log(new B); 도 가능

//new C();
//class C{}; // 에러(호스팅이 적용되지 않음.)
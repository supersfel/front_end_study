class A{
    static age = 24;
    static hello(){
        console.log(A.age);
    }
}

console.log(A,A.age);
A.hello(); //24 //new로 객체선언을 하지 않아도 사용이 가능하다 

class B{
    age = 24;
    static hello() {
        console.log(this.ago);
    }
}

console.log(B,B.age);
B.hello(); //undefined
//new B().hello(); //Uncaught TypeError: (intermediate value).hello is not a function
//static이라 객체는 hello함수가 선언된 것을 모름

class C{
    static name = "나는 C클래스이다!";
}

console.log(C); //[class 나는 C클래스이다!] { name: '나는 C클래스이다!' }
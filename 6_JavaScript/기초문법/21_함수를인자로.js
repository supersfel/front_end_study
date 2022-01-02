function hello(c){
    console.log('hello');
    c();
}

hello(function(){
    console.log('민규');
});

// 출력결과
// hello
// 민규
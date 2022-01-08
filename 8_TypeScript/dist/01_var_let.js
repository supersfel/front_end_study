var StarbuksGrade;
(function (StarbuksGrade) {
    StarbuksGrade["WELCOME"] = "WELCOME";
    StarbuksGrade["GREEN"] = "GREEN";
    StarbuksGrade["GOLD"] = "GOLD";
})(StarbuksGrade || (StarbuksGrade = {}));
function getDiscount(v) {
    switch (v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}
console.log(getDiscount(StarbuksGrade.GREEN)); // 5
console.log(StarbuksGrade.GREEN); //1
console.log(StarbuksGrade);
// {
//     '0': 'WELCOME',
//     '1': 'GREEN',
//     '2': 'GOLD',
//     WELCOME: 0,
//     GREEN: 1,
//     GOLD: 2
//   }
//# sourceMappingURL=01_var_let.js.map
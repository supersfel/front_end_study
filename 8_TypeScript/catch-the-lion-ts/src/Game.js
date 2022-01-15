"use strict";
//Game.ts
exports.__esModule = true;
exports.Game = void 0;
var Board_1 = require("./Board");
var Game = /** @class */ (function () {
    function Game() {
        this.board = new Board_1.Board();
        var boardContainer = document.querySelector(".board-container");
        boardContainer.firstChild.remove();
        boardContainer.appendChild(this.board._el);
    }
    return Game;
}());
exports.Game = Game;

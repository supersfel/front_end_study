"use strict";
//Board.ts
exports.__esModule = true;
exports.Board = exports.Cell = void 0;
var Cell = /** @class */ (function () {
    function Cell(position, //위치
    piece //말의 설정
    ) {
        this.position = position;
        this.piece = piece;
        this.isActive = false;
        this._el = document.createElement("DIV");
        this._el.classList.add("cell");
    }
    Cell.prototype.put = function (piece) {
        this.piece = piece;
    };
    Cell.prototype.getPiece = function () {
        return this.piece;
    };
    Cell.prototype.active = function () {
        this.isActive = true;
    };
    Cell.prototype.deactive = function () {
        this.isActive = false;
    };
    Cell.prototype.render = function () {
        if (this.isActive) {
            this._el.classList.add("active");
        }
        else {
            this._el.classList.remove("active");
        }
        this._el.innerHTML = this.piece ? this.piece.render() : ""; //말들이 올려져 있으면
    };
    return Cell;
}());
exports.Cell = Cell;
var Board = /** @class */ (function () {
    function Board() {
        this.cells = [];
        this._el = document.createElement("DIV");
        this._el.className = "board";
        for (var row = 0; row < 4; row++) {
            var rowEl = document.createElement("div");
            rowEl.className = "row";
            this._el.appendChild(rowEl);
            for (var col = 0; col < 3; col++) {
                var cell = new Cell({ row: row, col: col }, null); //Cell들에대한 포지셔닝
                this.cells.push(cell);
                rowEl.appendChild(cell._el);
            }
        }
    }
    Board.prototype.render = function () {
        this.cells.forEach(function (v) { return v.render(); }); //cell들의 render을 호출
    };
    return Board;
}());
exports.Board = Board;

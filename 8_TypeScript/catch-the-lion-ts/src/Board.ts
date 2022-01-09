//Board.ts

import { Piece } from "./Piece";

export interface Position {
  row: number;
  col: number;
}

export class Cell {
  private isActive = false;
  readonly _el: HTMLElement = document.createElement("DIV");

  constructor(
    public readonly position: Position, //위치
    private piece: Piece //말의 설정
  ) {
    this._el.classList.add("cell");
  }

  put(piece: Piece) {
    this.piece = piece;
  }

  getPiece() {
    return this.piece;
  }

  active() {
    this.isActive = true;
  }

  deactive() {
    this.isActive = false;
  }

  render() {
    if (this.isActive) {
      this._el.classList.add("active");
    } else {
      this._el.classList.remove("active");
    }

    this._el.innerHTML = this.piece ? this.piece.render() : ""; //말들이 올려져 있으면
  }
}

export class Board {
  cells: Cell[] = [];
  _el: HTMLElement = document.createElement("DIV");

  constructor() {
    this._el.className = "board";

    for (let row = 0; row < 4; row++) {
      const rowEl = document.createElement("div");
      rowEl.className = "row";
      this._el.appendChild(rowEl);

      for (let col = 0; col < 3; col++) {
        const cell = new Cell({ row, col }, null); //Cell들에대한 포지셔닝
        this.cells.push(cell);
        rowEl.appendChild(cell._el);
      }
    }
  }

  render() {
    this.cells.forEach((v) => v.render()); //cell들의 render을 호출
  }
}

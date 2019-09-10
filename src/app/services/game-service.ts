import { Injectable } from '@angular/core';
import { brick } from '../models/brick.model';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private board: brick[][];
  remainBrick: number;
  remainMines: number;
  time: number;
  PEERS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  startGame() {
    this.board = [];
    this.remainBrick = 0;
    this.remainMines = 0;
    this.time = 0;

    // create bricks
    for (let y = 0; y < 8; y++) {
      this.board[y] = []
      for (let x = 0; x < 8; x++) {
        this.board[y][x] = new brick(y, x);
      }
    }
    // create mines
    for (let i = 0; i < 5; i++) {
      const y = Math.floor(Math.random() * this.board.length);
      const x = Math.floor(Math.random() * this.board[y].length);
      this.board[x][y].mine = true;
      console.log(x, y);
    }
  }

  getProximyMines(i, j ) {
    this.board[i][j].proximyMines = this.countAdjacents(i, j);
    return this.board[i][j].proximyMines;
  }

  brickMine(i, j) {
    return this.board[i][j].mine;
  }

  public brickStatus(i, j) {
    return this.board[i][j].status;
  }

  setStatus(i , j , status) {
    this.board[i][j].status = status;
  }

  getBoard() {
    return this.board;
  }

  countAdjacents(i, j) {
    let count = 0;
    this.PEERS.forEach((peer, x) => {
    let peerX = i + peer[0];
    let peerY =  j + peer[1];
    if (peerX >= 0 && peerX < 8 && peerY >= 0 && peerY < 8) {
        if (this.brickMine(i + peer[0], j + peer[1])) {
          count ++;
        }
      }
    });
    return count;
  }
}

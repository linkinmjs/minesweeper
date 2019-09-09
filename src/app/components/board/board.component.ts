import { Component, OnInit } from '@angular/core';
import { brick } from 'src/app/models/brick.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})


export class BoardComponent implements OnInit {

  PEERS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  brick: brick[][] = []

  remainBrick: 0;
  remainMines: 0;
  time: 0;


  
  constructor() {
    for (let y = 0; y < 8; y++) {
      this.brick[y] = []
      for (let x = 0; x < 8; x++) {
        this.brick[y][x] = new brick(y, x);
        //console.log(this.brick);
      }
    }



  }



  ngOnInit() {
    //create 5 mines
    for (let i = 0; i < 5; i++) {
      this.getRandomBrick().mine = true;
    }
  }

  getRandomBrick(): brick {
    const y = Math.floor(Math.random() * this.brick.length);
    const x = Math.floor(Math.random() * this.brick[y].length);
    //console.log(this.brick[y][x]);
    return this.brick[y][x];
  }

}

import { Component, OnInit } from '@angular/core';
import { brick } from 'src/app/models/brick.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})


export class BoardComponent implements OnInit {

  PEERS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  bricks: brick[][] = []
  boardRevealed:boolean=false;
  remainBrick: 0;
  remainMines: 0;
  time: 0;


  
  constructor() {
  
  }



  ngOnInit() {
    //create 5 mines
    this.setupBoard();
  }

  detectMine(i, j ){
    console.log(this.bricks[i][j].mine)
  }
  revealBrick(i,j){
    let currentBick = this.bricks[i][j];
    if(currentBick.mine === true){
      alert('Rompiste');
      this.boardRevealed = true;
    } else {
      console.log("ni bosta")
    }
  }
  setupBoard(){
  this.bricks = []
  this.boardRevealed=false;
  this.remainBrick= 0;
  this.remainMines= 0;
  this.time= 0;
    for (let y = 0; y < 8; y++) {
      this.bricks[y] = []
      for (let x = 0; x < 8; x++) {
        this.bricks[y][x] = new brick(y, x);
        //console.log(this.brick);
      }
      // console.log(this.bricks)
    }
    for (let i = 0; i < 5; i++) {
      const y = Math.floor(Math.random() * this.bricks.length);
      const x = Math.floor(Math.random() * this.bricks[y].length);
      this.bricks[x][y].mine = true;    
      console.log(x,y) 
    }
  }

}

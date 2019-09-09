import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game-service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})


export class BoardComponent implements OnInit {


  boardRevealed = false;
  constructor(public gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.startGame();
  }

  // on init

  revealBrick(i, j) {
    if (this.gameService.brickMine(i, j) === true) {
      alert('BOOM!');
      this.boardRevealed = true;
    } else {
      console.log('No mine here!');
    }
  }

  setupFlag(i, j) {
    const currentStatus = this.gameService.brickStatus(i , j);
    if (currentStatus !== 'flag') {
      this.gameService.setStatus(i , j , 'flag');
    } else
      if (currentStatus === 'flag') {
        this.gameService.setStatus(i , j , 'clear');
      }
    return false;
  }

  flagged(i, j) {
    return this.gameService.brickStatus(i , j) === 'flag';
  }

  restart() {
    this.boardRevealed = false;
    this.gameService.startGame();
  }
}

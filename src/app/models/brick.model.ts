export class brick{
    mine: boolean;
    status: 'open' | 'clear' | 'flag';
    proximyMines: number;
    row:number ;
    column:number;

    //x y
    constructor(row: number,column: number){
      this.row = row;
      this.column = column;
      this.status = "open";
      this.proximyMines = 0;
      this.mine = false;
    }
}

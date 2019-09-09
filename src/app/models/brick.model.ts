export class brick{
    mine: boolean = false;
    status: 'open' | 'clear' | 'flag' = 'open';
    proximyMines: 0;

    //x y
    constructor(public row: number, public column: number){}
}
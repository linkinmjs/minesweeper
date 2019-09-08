export class brick{
    mine: false;
    status: 'open' | 'clear' | 'flag' = 'open';
    proximyMines: 0;

    constructor(public row: number, public column: number){}
}
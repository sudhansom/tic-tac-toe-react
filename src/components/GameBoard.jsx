const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]


const GameBoard = ({onSelection, updatedTurns}) => {
    let gameBoard = initialGameBoard;

    for (const turn of updatedTurns){
        const {square, player} = turn;
        const { row, col} = square;
        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // const handleClick = (i, j, s) => {
    //     if(s){
    //         alert('not allowed to change...');
    //         return
    //     }
    // setGameBoard(prev => {
    //     const temp = [...prev].map(innerArray => [...innerArray]);
    //     temp[i][j] = activePlayer;
    //     return temp;
    // })
    // onSelection();
    
        
    // }
  return (
   <ol id="game-board">
    {gameBoard.map((row, i)=> <li key={i} >
        <ol>
            {row.map((symbol, j) => <li key={j}><button onClick={()=>onSelection(i,j, symbol)} disabled={!!symbol}>{symbol}</button></li> )}
        </ol>
    </li>)}
   </ol>
  )
}

export default GameBoard
import Card from "../Card/Card";
import { useState } from "react";
import './Grid.css';
import isWinner from "../../Helper/Checkwinner";
function Grid({numberOfCards})
{
  const [board,setBoard]=useState(Array(numberOfCards).fill(""));
  const [turn ,setTurn]=useState(true);
  const [winner,setWinner]=useState(null);
  function play(index)
  {
    if(turn ==true)
    {
        board[index]="O";
    }
    else{
        board[index]="X";
    }
    const win=isWinner(board, turn ? "O" :"X")
    if(win)
    {
        setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }
  function reset()
  {
    setTurn(true);
    setWinner(null);
    setBoard(Array(numberOfCards).fill(""));
  }
  return (
    <div className="grid-wrapper">
        {
            winner &&(
                <>
                <h1 className="turn-highlight"> winner is {winner}</h1>
                <button className="reset" onClick={reset}>Reset game</button>
                </>
            )
        }
        <h1 className="turn-highlight"> Current turn :{(true) ? 'O':'X'} </h1>
         <div className="grid">
     {board.map((ele,idx)=><Card gameEnd={winner ?true :false } key={idx} onPlay={play} player ={ele} index ={idx}/>)}
    </div>
    </div>
   
  );
}
export default Grid;
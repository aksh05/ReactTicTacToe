import React, {Component} from 'react';

 function Square(props){
     console.log(props);
        return (
            <button className="square" onClick = {props.onClick}>
                {props.value}
            </button>
        );
    
}

 class Board extends React.Component{

    constructor(props){
        super(props)
        console.log(this)
    }
      renderSquare(i) {
        return (
          <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
            status={this.props.status}
          />
        );
      }

    
    render(){

        return (
           <div>
                <div className="status">{this.props.status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(""),
            }],
            xIsNext: true,
            
        }
    }
   
    handleClick(i){

        const history = this.state.history;
        const currentState = history[history.length-1];
        const squares = currentState.squares.slice();

        if(calculateWinner(squares)){
            return;
        }

        if(!squares[i]){
            squares[i] = this.state.xIsNext?'X':'O';
           history.push({squares: squares});
            this.setState({
                history: this.state.history.concat(history),
                xIsNext: !this.state.xIsNext,
            });
        }
    }
    

    reset(){
        this.setState({
                history: [{
                    squares: Array(9).fill(""),
                }],
                xIsNext: !this.state.xIsNext,
            });
    }
    
    gotoState(i){

    }

    render(){
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);
        
        const moves = history.map(function(step, move){
            const stateInfo = move? "Gor to move "+move: "Go to start of the game";

            return (
                <li>
                    <a class="game-state">{stateInfo}</a>
                </li>
            );
        });

        let status;
        if (winner) {
          status = 'Winner: ' + winner;
          
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return <div className="game">
            <div className="game-board">
                 <Board squares={current.squares}
                 onClick={(i)=>this.handleClick(i)}
                 status={status}/>
            </div>
            <div className="game-info">
                {/* <div>{status}</div> */}
                <ol>{moves}</ol>
            </div>
            <div className="game-reset">
                <button className="game-reset-bt" onClick={this.reset.bind(this)}>
                    Reset
                </button>

            </div>
        </div>
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  } 


export default Game;
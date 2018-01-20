import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// functional component example
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Row(props) {
  return (
    <div className="row">

    </div>
  );
}

//class example
// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick({value: 'X'})}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

class Board extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: this.state.squares,
  //     xIsNext: this.state.xIsNext,
  //   };
  // }
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderRow(i) {
    console.log(this)
    return (
      <Row
      // value={this.props.rows[i]
      />
    );
  }




  render() {
    // for (let i = 0; i < this.props.value)
    console.log(this.props)
    return (
      <div>
          {this.renderRow(0)}
         
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

// =========== GAME ==============
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      // squares: Array(9).fill(null),
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    // .slice() to copy the squares array instead of mutating the existing array
    const squares = current.squares.slice();
    console.log(this.state.squares)
    console.log(history)
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // if else statement in ES6 context
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // !this.state.xIsNext is like a toggler
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move : //true
        'Go to game start'; //false
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    console.log(history)
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }


    return (
      <div className="game">
        <div className="game-board">
            <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
           <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

var calculateWinner = (squares) => {
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

ReactDOM.render(
  <Game />,
  document.getElementById('root')

);

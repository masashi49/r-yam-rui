import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


interface SquarePropsInterface {
    add: number;
}

interface SquareStateInterface {
    value: number;
    ken: string;
}


class Square extends React.Component<SquarePropsInterface ,SquareStateInterface> {
    constructor(props: SquarePropsInterface) {
        super(props);
        this.state = {
            value: props.add,
            ken: '',
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.setState({value: 0,ken: 'ooo'})}>
                {this.state.value}
               <span>{this.state.ken}</span>
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i: number) {
        return <Square add={i} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(33)}
                    {this.renderSquare(21)}
                    {this.renderSquare(42)}
                </div>
                <div className="board-row">
                    {this.renderSquare(53)}
                    {this.renderSquare(45)}
                    {this.renderSquare(445)}
                </div>
                <div className="board-row">
                    {this.renderSquare(56)}
                    {this.renderSquare(76)}
                    {this.renderSquare(48)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
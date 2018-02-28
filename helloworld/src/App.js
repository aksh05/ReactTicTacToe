import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from './MainGame';

class TicTacToe extends React.Component{

    renderGame(){
      return <Game />;
    } 
    render(){
        return (
          <div>
            {this.renderGame()}
          </div>
        );
    }
}


export default TicTacToe;

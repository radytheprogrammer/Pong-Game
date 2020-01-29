import { SVG_NS, KEYS } from "../settings.js"; /* import variables */

import Board from "./Board.js";
import Paddle from "./Paddle.js";
import Ball from "./Ball.js";
export default class Game {

  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;    // Other code goes here...
    this.gameElement = document.getElementById(this.element);    
    this.board = new Board(this.width, this.height); /* instantiate svg object */
    this.paddWidth = 8;
    this.paddHeight = 56;
    this.boardGap = 10;    
    
    this.player1 = new Paddle(  /* instantiate svg object */
      this.height,
      this.paddWidth,
      this.paddHeight,
      this.boardGap,
      (this.height - this.paddHeight) / 2,
      KEYS.a,
      KEYS.z
    );
    
    this.player2 = new Paddle( /* instantiate svg object */
      this.height,
      this.paddWidth,
      this.paddHeight,
      this.width - this.paddWidth - this.boardGap,
      (this.height - this.paddHeight) / 2,
      KEYS.up,
      KEYS.down
    );    
    
    this.ball = new Ball(this.radius);
    this.radius = 8;
    

  }
  
    render() {
        // More code goes here....    
        this.gameElement.innerHTML = "";                 // clear the svg canvas each time
        let svg = document.createElementNS(SVG_NS, "svg"); // empty canvas created each time render() is called
        svg.setAttributeNS(null, "width", this.width);
        svg.setAttributeNS(null, "height", this.height);
        this.gameElement.appendChild(svg);
        this.board.render(svg);    
        this.player1.render(svg);
        this.player2.render(svg);
        this.ball.render(svg);
    }

}
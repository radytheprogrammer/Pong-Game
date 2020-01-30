import { SVG_NS, KEYS } from "../settings.js"; /* import variables */

import Board    from "./Board.js"
import Paddle   from "./Paddle.js"
import Ball     from "./Ball.js"
import Score    from "./Score"

export default class Game {

  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height; 
    this.gameElement = document.getElementById(this.element);    // 
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
      (this.width - this.boardGap - this.paddWidth),
      (this.height - this.paddHeight) / 2,
      KEYS.up,
      KEYS.down
    );

    this.score1 = new Score(
      this.width / 2 - 50,
      30,
      30
    )

    this.score2 = new Score(
      this.width / 2 + 25,
      30,
      30
    )

    this.ball = new Ball(8, this.width, this.height);

    document.addEventListener('keydown', event => {
        switch(event.key) {
            case KEYS.spaceBar:
              this.pause = !this.pause;
              break
        }
    })


  } // end of constructor
  
    render() {

        if(this.pause){
          /* to pause the game, simply return */
          return 
        }

        // clear the svg canvas each time
        this.gameElement.innerHTML = "";
        // empty canvas created each time render() is called
        let svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttributeNS(null, "width", this.width);
        svg.setAttributeNS(null, "height", this.height);

        this.gameElement.appendChild(svg);
        
        this.board.render(svg); // LOL, board doesn't appear

        /* render the paddles */
        this.player1.render(svg);
        this.player2.render(svg);

        this.ball.render(svg, this.player1, this.player2);

        this.score1.render(svg, this.player1.score)
        this.score2.render(svg, this.player2.score)

        // if player wants to pause the game
    }

}

/* -- Stretch Goal --

  create a gameOver() method that resets when a player reaches 10




*/
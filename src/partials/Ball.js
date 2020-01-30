import { SVG_NS } from "../settings.js";
export default class Ball {

    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1; // what is this for
      //reset the ball in the middle of the board
      this.reset();
    }  
    
    reset() {
      //code to center ball and for movement
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;// generated random number between -5 and 5
      // makes sure number does not equal 0
      this.vy = 0;
      while (this.vy === 0) {
        this.vy = Math.floor(Math.random() * 10 - 5);
      }
      this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    

    paddleCollision(player1, player2) {

      // if moving toward the right end...

      if (this.vx > 0) { 

        

        // detect player2 paddle collision

        let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);

        let [ leftX, rightX, topY, bottomY ] = paddle;

        if ( 

          (this.x + this.radius >= leftX) // right edge of the ball is >= left edge of the paddle

          && (this.x + this.radius <= rightX) // right edge of the ball is <= right edge of the paddle

          && (this.y >= topY && this.y <= bottomY) // ball Y is >= paddle top Y and <= paddle bottom Y

        ) {

          this.vx = -this.vx;

          // this.ping.play();

        }

      } else {

        let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);

        let [ leftX, rightX, topY, bottomY ] = paddle;

        if (

          (this.x - this.radius <= rightX) // left edge of the ball is <= right edge of the paddle 

          && (this.x - this.radius >= leftX) // left edge of the ball is >= left edge of the paddle

          && (this.y >= topY && this.y <= bottomY) // ball Y is >= paddle top Y or <= paddle bottom

        ) {

          this.vx = -this.vx;

          // this.ping.play();

        }

      }

    }


    
    wallCollision() {
      const hitLeft = this.x - this.radius <= 0;
      const hitRight = this.x + this.radius >= this.boardWidth;
      const hitTop = this.y - this.radius <= 0;   
      const hitBottom = this.y + this.radius >= this.boardHeight;
      
      if (hitLeft || hitRight) {
        this.vx = -this.vx;
      } else if (hitTop || hitBottom) {
        this.vy = -this.vy;
      }

      //if wall hits left or right
      // reverse vx direction
      // else if ball hits top or bottom

      // reverse vy direction
    }
    
    

    goal(player) {

      player.score++;

      this.reset();

    }



    render(svg, player1, player2) {
      this.x += this.vx;
      this.y += this.vy;   

      let circle = document.createElementNS(SVG_NS, "circle");
      circle.setAttributeNS(null, "r", this.radius);
      circle.setAttributeNS(null, "cx", this.x);
      circle.setAttributeNS(null, "cy", this.y);
      circle.setAttributeNS(null, "fill", "white");
      svg.appendChild(circle);

      this.wallCollision()

      this.paddleCollision(player1, player2)

        

      const rightGoal = this.x + this.radius >= this.boardWidth;

      const leftGoal = this.x - this.radius <= 0;

    

    if (rightGoal) {

            this.goal(player1);

      this.direction = 1;

        } else if (leftGoal) {

            this.goal(player2);

      this.direction = -1;

        }


    }

    

  }

  /* Notes 
  The ball can go past the start of the board or the width of the board 

  */
import {SVG_NS} from '../settings'

export default class Paddle {

    constructor(boardHeight, width, height, x, y, up, down) {
        this.boardHeight    = boardHeight
        this.width          = width
        this.height         = height
        this.x = x
        this.y = y
        this.speed = 18
        this.score = 0
        this.name = name
        
        document.addEventListener('keydown',  event => {
            switch(event.key) {
                case up:
                    this.up()
                    break
                case down:
                    this.down()
                    break
                // case left:
                //     this.left()
            }
        })
    }

    up() {
        /* as the player goes up, the y-value is decreasing by speed each time */
        this.y = Math.max(0, this.y - this.speed);
        //this.y = this.y - speed; // Danger! paddle will disappear off the board
        console.log(this.x, this.y)
    }

    down() {
        /* the first arg will approach zero */
        this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
    }

    /* if you need a function, just add it. Be independant, be coding, be happy.*/
    // left() {
    //     this.x = Math.max(0, thix.x - this.speed)
    // }

    /* the coordinates for the paddle will appear on the screen */
    coordinates(x,y,width,height) {
        let leftX = x
        let rightX = x + width
        let topY = y
        let bottomY = y + height
        return [leftX, rightX, topY, bottomY]
    }

    render(svg){
        let rect = document.createElementNS(SVG_NS, 'rect')
        //your code here
        rect.setAttributeNS(null, "x", this.x);
        rect.setAttributeNS(null, "y", this.y);
        rect.setAttributeNS(null, "width", this.width);
        rect.setAttributeNS(null, "height", this.height);
        rect.setAttributeNS(null, "fill", "white");
        svg.appendChild(rect);
    }
}

/* Notes 
As the player moves up, the value of this.y decreases by speed amount

Paddle can go up and down but as an interesting feature, I want to make it go left or right

*/